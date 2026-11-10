"""Render the STRUCON project documents to PDF.

Markdown -> styled HTML -> Chrome headless print-to-PDF -> metadata stamped.
Author is set both visibly (title block) and in the PDF metadata.
"""
import os, re, html, subprocess, sys, datetime

AUTHOR = "Shaurya Sharma"
COMPANY = "STRUCON Consulting Pvt. Ltd."
PROJ = r"C:/Users/Shaurya/AppData/Local/Claude-Data/claude_pzs8sxrjxfjjc/strucon-website"
OUT = os.path.join(PROJ, "docs", "pdf")
TMP = os.path.dirname(os.path.abspath(__file__))
CHROME = r"C:/Program Files/Google/Chrome/Application/chrome.exe"

DOCS = [
    ("business-case.html", "Website Rebuild: Comparative Audit & Business Case", "html"),
    ("REQUIREMENTS.md",    "Requirements & Assets Checklist",                    "md"),
    ("SEO.md",             "SEO Strategy & Implementation Report",               "md"),
    ("DEPLOYMENT.md",      "Deployment Guide",                                   "md"),
    ("client-email-draft.md", "Client Email — Content Form Cover Note",          "md"),
    ("README.md",          "Project Technical Overview",                         "md"),
]

# ----------------------------------------------------------------- markdown
def inline(t: str) -> str:
    """Inline markdown -> HTML. Code spans are protected from other rules."""
    spans = []
    def keep(m):
        spans.append(m.group(1))
        return f"\x00{len(spans)-1}\x00"
    t = re.sub(r"`([^`]+)`", keep, t)
    t = html.escape(t, quote=False)
    t = re.sub(r"!\[([^\]]*)\]\(([^)]+)\)", r"", t)                      # drop images
    t = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', t)
    t = re.sub(r"\*\*\*(.+?)\*\*\*", r"<strong><em>\1</em></strong>", t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<!\*)\*(?!\s)(.+?)(?<!\s)\*(?!\*)", r"<em>\1</em>", t)
    t = re.sub(r"~~(.+?)~~", r"<del>\1</del>", t)
    t = re.sub(r"\x00(\d+)\x00", lambda m: f"<code>{html.escape(spans[int(m.group(1))], quote=False)}</code>", t)
    return t

def md_to_html(src: str) -> str:
    lines = src.split("\n")
    out, i, n = [], 0, len(lines)
    list_stack = []            # list of ('ul'|'ol', indent)

    def close_lists(to_indent=-1):
        while list_stack and list_stack[-1][1] > to_indent:
            out.append(f"</{list_stack.pop()[0]}>")

    while i < n:
        ln = lines[i]
        raw = ln.rstrip()
        stripped = raw.strip()

        # fenced code
        if stripped.startswith("```"):
            close_lists()
            i += 1
            buf = []
            while i < n and not lines[i].strip().startswith("```"):
                buf.append(lines[i]); i += 1
            i += 1
            out.append("<pre><code>" + html.escape("\n".join(buf), quote=False) + "</code></pre>")
            continue

        if not stripped:
            close_lists(); i += 1; continue

        # horizontal rule
        if re.fullmatch(r"(-{3,}|\*{3,}|_{3,})", stripped):
            close_lists(); out.append("<hr>"); i += 1; continue

        # table
        if stripped.startswith("|") and i + 1 < n and re.fullmatch(r"\|[\s:\-|]+\|", lines[i+1].strip()):
            close_lists()
            def cells(row):
                return [c.strip() for c in row.strip().strip("|").split("|")]
            head = cells(raw)
            i += 2
            body = []
            while i < n and lines[i].strip().startswith("|"):
                body.append(cells(lines[i])); i += 1
            t = ['<table><thead><tr>'] + [f"<th>{inline(c)}</th>" for c in head] + ["</tr></thead><tbody>"]
            for r in body:
                r = (r + [""] * len(head))[:len(head)]
                t.append("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>")
            t.append("</tbody></table>")
            out.append("".join(t)); continue

        # blockquote
        if stripped.startswith(">"):
            close_lists()
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(re.sub(r"^\s*>\s?", "", lines[i])); i += 1
            out.append("<blockquote>" + md_to_html("\n".join(buf)) + "</blockquote>")
            continue

        # heading
        m = re.match(r"^(#{1,6})\s+(.*)$", stripped)
        if m:
            close_lists()
            lvl = len(m.group(1))
            out.append(f"<h{lvl}>{inline(m.group(2))}</h{lvl}>")
            i += 1; continue

        # list item
        m = re.match(r"^(\s*)([-*+]|\d+\.)\s+(.*)$", raw)
        if m:
            indent = len(m.group(1).replace("\t", "    "))
            kind = "ul" if m.group(2) in "-*+" else "ol"
            txt = m.group(3)
            # task list
            tick = ""
            mt = re.match(r"^\[([ xX])\]\s*(.*)$", txt)
            if mt:
                tick = '<span class="box">&#10003;</span> ' if mt.group(1).lower() == "x" else '<span class="box off"></span> '
                txt = mt.group(2)
            while list_stack and list_stack[-1][1] > indent:
                out.append(f"</{list_stack.pop()[0]}>")
            if not list_stack or list_stack[-1][1] < indent:
                list_stack.append((kind, indent)); out.append(f"<{kind}>")
            elif list_stack[-1][0] != kind:
                out.append(f"</{list_stack.pop()[0]}>")
                list_stack.append((kind, indent)); out.append(f"<{kind}>")
            out.append(f"<li>{tick}{inline(txt)}</li>")
            i += 1; continue

        # paragraph
        close_lists()
        buf = [raw]
        i += 1
        while i < n and lines[i].strip() and not re.match(
                r"^\s*(#{1,6}\s|[-*+]\s|\d+\.\s|>|\||```|(-{3,}|\*{3,}|_{3,})$)", lines[i].strip()):
            buf.append(lines[i].rstrip()); i += 1
        out.append("<p>" + inline(" ".join(x.strip() for x in buf)) + "</p>")

    close_lists()
    return "\n".join(out)

# ----------------------------------------------------------------- shell
CSS = """
@page { size: A4; margin: 18mm 16mm 16mm 16mm; }
*{box-sizing:border-box}
body{margin:0;font:10.5pt/1.62 "Segoe UI",-apple-system,Arial,sans-serif;color:#22303F;background:#fff;
     -webkit-print-color-adjust:exact;print-color-adjust:exact}
.doc{max-width:170mm;margin:0 auto}
.mast{border-bottom:3px solid #F26419;padding-bottom:14px;margin-bottom:26px}
.mast .co{font-family:Consolas,monospace;font-size:8.5pt;letter-spacing:.2em;text-transform:uppercase;color:#1B4B77}
.mast h1{margin:10px 0 12px;font-size:23pt;line-height:1.1;letter-spacing:-.02em;color:#0B1F33}
.meta{display:flex;flex-wrap:wrap;gap:0;border-top:1px solid #D9E0E8;padding-top:8px}
.meta div{padding:4px 16px 2px 0;margin-right:16px;border-right:1px solid #E6EBF0}
.meta div:last-child{border-right:0}
.meta dt{font-family:Consolas,monospace;font-size:7pt;letter-spacing:.16em;text-transform:uppercase;color:#7E96AB;margin:0}
.meta dd{margin:2px 0 0;font-size:9pt;font-weight:600;color:#0B1F33}
h1,h2,h3,h4{color:#0B1F33;line-height:1.22;page-break-after:avoid;break-after:avoid}
h2{font-size:15pt;margin:22px 0 8px;padding-bottom:5px;border-bottom:1px solid #D9E0E8;letter-spacing:-.01em}
h3{font-size:12pt;margin:16px 0 5px}
h4{font-size:10.5pt;margin:13px 0 4px;color:#1B4B77}
p{margin:7px 0;orphans:3;widows:3}
ul,ol{margin:7px 0;padding-left:20px}
li{margin:3px 0}
a{color:#1B4B77;text-decoration:none;border-bottom:.5pt solid #B9CBDB;word-break:break-word}
strong{color:#0B1F33}
code{font-family:Consolas,monospace;font-size:9pt;background:#EDF1F6;padding:1px 4px;border-radius:2px}
pre{background:#0B1F33;color:#E8EEF5;padding:10px 12px;border-radius:3px;overflow:hidden;page-break-inside:avoid}
pre code{background:none;color:inherit;font-size:8.5pt;white-space:pre-wrap;word-break:break-word}
blockquote{margin:10px 0;padding:8px 14px;border-left:3px solid #F26419;background:#F7F9FB}
blockquote p{margin:4px 0}
hr{border:0;border-top:1px solid #D9E0E8;margin:20px 0}
table{border-collapse:collapse;width:100%;margin:12px 0;font-size:9pt;page-break-inside:avoid}
th{background:#12293F;color:#fff;text-align:left;padding:6px 8px;font-size:8pt;letter-spacing:.04em;text-transform:uppercase}
td{padding:6px 8px;border-top:.5pt solid #D9E0E8;vertical-align:top}
tbody tr:nth-child(even) td{background:#F7F9FB}
.box{display:inline-block;width:9pt;height:9pt;border:.8pt solid #1F7A4D;color:#1F7A4D;font-size:7pt;
     line-height:9pt;text-align:center;margin-right:3px}
.box.off{border-color:#AEBCC8;color:transparent}
.foot{margin-top:28px;padding-top:10px;border-top:1px solid #D9E0E8;
      font-family:Consolas,monospace;font-size:7.5pt;color:#7E96AB}
"""

def shell(title, body, docno):
    today = datetime.date.today().strftime("%d %B %Y")
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>{html.escape(title)}</title>
<meta name="author" content="{AUTHOR}">
<style>{CSS}</style></head><body><div class="doc">
<header class="mast">
  <div class="co">{html.escape(COMPANY)} &middot; Project Documentation</div>
  <h1>{html.escape(title)}</h1>
  <dl class="meta">
    <div><dt>Prepared by</dt><dd>{AUTHOR}</dd></div>
    <div><dt>Document</dt><dd>{docno}</dd></div>
    <div><dt>Date</dt><dd>{today}</dd></div>
  </dl>
</header>
{body}
<div class="foot">{docno} &middot; Prepared by {AUTHOR} &middot; {html.escape(COMPANY)} &middot; {today}</div>
</div></body></html>"""

# business-case.html already has its own full design; force its light palette for print
# (its dark tokens live in a media query, so a later :root block at equal specificity wins)
PRINT_OVERRIDE = """
<style>
:root{--ground:#FFFFFF;--card:#FFFFFF;--line:#D9E0E8;--text:#22303F;--muted:#5A6B7E;
 --pass:#1F7A4D;--pass-bg:#E8F4EE;--fail:#B3372A;--fail-bg:#F9ECEA;--code-bg:#EDF1F6;--head:#0B1F33;--steel-soft:#4E7CA6}
@page{size:A4;margin:14mm 12mm}
body{background:#fff!important;-webkit-print-color-adjust:exact;print-color-adjust:exact;font-size:10pt}
.wrap{max-width:none}
.mast{break-inside:avoid}
.section{padding:20px 0 4px;break-inside:auto}
h2{break-after:avoid}
.tile,.stat,.panel,.callout,.tblwrap,.funnel{break-inside:avoid}
table{font-size:8.5pt}
th{background:#12293F!important;color:#E8EEF5!important}
.prepared{margin-top:10px;font-family:ui-monospace,Consolas,monospace;font-size:10px;
 letter-spacing:.16em;text-transform:uppercase;color:#9FBAD1}
</style>
"""

def run_chrome(src_html, pdf_path):
    cmd = [CHROME, "--headless=new", "--disable-gpu", "--no-sandbox",
           "--no-pdf-header-footer", "--run-all-compositor-stages-before-draw",
           "--virtual-time-budget=10000",
           f"--print-to-pdf={pdf_path}", "file:///" + src_html.replace("\\", "/")]
    r = subprocess.run(cmd, capture_output=True, text=True, timeout=180)
    return r.returncode, (r.stderr or "")[-300:]

def main():
    os.makedirs(OUT, exist_ok=True)
    made = []
    for idx, (fname, title, kind) in enumerate(DOCS, 1):
        path = os.path.join(PROJ, "docs", fname)
        if not os.path.exists(path):
            path = os.path.join(PROJ, fname)
        if not os.path.exists(path):
            print(f"SKIP (missing): {fname}"); continue

        src = open(path, encoding="utf-8").read()
        docno = f"STR-DOC-{idx:02d}"

        if kind == "html":
            doc = src
            # stamp the author into the existing title block
            doc = doc.replace("</dl>", '</dl>\n<p class="prepared">Prepared by ' + AUTHOR + "</p>", 1)
            doc = doc.replace("</style>", "</style>\n" + PRINT_OVERRIDE, 1)
            if "<meta name=\"author\"" not in doc:
                doc = f'<meta charset="utf-8"><meta name="author" content="{AUTHOR}">\n' + doc
        else:
            doc = shell(title, md_to_html(src), docno)

        tmp_html = os.path.join(TMP, f"_doc{idx}.html")
        open(tmp_html, "w", encoding="utf-8").write(doc)

        safe = re.sub(r"[^A-Za-z0-9]+", "-", title).strip("-")
        pdf = os.path.join(OUT, f"{docno}_{safe}.pdf")
        rc, err = run_chrome(tmp_html, pdf)
        ok = os.path.exists(pdf) and os.path.getsize(pdf) > 2000
        print(f"{'OK  ' if ok else 'FAIL'} {os.path.basename(pdf)} "
              f"({os.path.getsize(pdf)//1024 if ok else 0} KB)" + ("" if ok else f"  rc={rc} {err}"))
        if ok:
            made.append((pdf, title))

    # stamp metadata
    import fitz
    for pdf, title in made:
        d = fitz.open(pdf)
        d.set_metadata({"author": AUTHOR, "title": title,
                        "subject": f"{COMPANY} — project documentation",
                        "creator": AUTHOR, "producer": AUTHOR,
                        "keywords": "STRUCON, structural engineering, steel detailing"})
        tmp = pdf + ".tmp"
        d.save(tmp); d.close()
        os.replace(tmp, pdf)
    print(f"\n{len(made)} PDFs written to {OUT}")

if __name__ == "__main__":
    main()
