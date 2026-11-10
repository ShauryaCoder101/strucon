"""Inline the real typefaces into an HTML document as base64 @font-face rules.

Why this exists: the rationale document shows side-by-side specimens of the old
site's typefaces (Montserrat / Open Sans) against the new ones (Space Grotesk /
Inter / IBM Plex Mono). When the HTML links Google Fonts over the network,
headless Chrome silently falls back to Segoe UI for some families — which would
make those specimens misrepresent the very fonts the document argues for.
Embedding the font bytes makes rendering deterministic.

Usage:  python embed-fonts.py <input.html> <output.html>
Requires network access the first time it is run (fetches from Google Fonts).
"""
import base64, os, re, sys, urllib.request

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/120.0 Safari/537.36")

# family name as used in CSS, Google Fonts query name, weights needed
FAMILIES = [
    ("Space Grotesk", "Space+Grotesk", [400, 700]),
    ("Inter",         "Inter",         [400, 600]),
    ("IBM Plex Mono", "IBM+Plex+Mono", [400]),
    ("Montserrat",    "Montserrat",    [400, 700]),
    ("Open Sans",     "Open+Sans",     [400]),
]


def _fetch(url: str) -> bytes:
    return urllib.request.urlopen(
        urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60
    ).read()


def _faces() -> list[str]:
    out = []
    for nice, query, weights in FAMILIES:
        css = _fetch(
            f"https://fonts.googleapis.com/css2?family={query}"
            f":wght@{';'.join(str(w) for w in weights)}&display=swap"
        ).decode("utf-8")

        picked: dict[int, str] = {}
        for block in re.findall(r"@font-face\s*\{[^}]+\}", css):
            rng = re.search(r"unicode-range:\s*([^;]+);", block)
            # keep only the Latin subset — the others are never used here
            if not rng or "U+0000-00FF" not in rng.group(1):
                continue
            wt = re.search(r"font-weight:\s*(\d+)", block)
            src = re.search(r"url\((https://fonts\.gstatic\.com[^)]+\.woff2)\)", block)
            if wt and src and int(wt.group(1)) in weights:
                picked.setdefault(int(wt.group(1)), src.group(1))

        for wt in weights:
            if wt not in picked:
                print(f"  WARNING: no Latin face found for {nice} {wt}", file=sys.stderr)
                continue
            b64 = base64.b64encode(_fetch(picked[wt])).decode("ascii")
            out.append(
                f"@font-face{{font-family:'{nice}';font-style:normal;"
                f"font-weight:{wt};font-display:block;"
                f"src:url(data:font/woff2;base64,{b64}) format('woff2');}}"
            )
            print(f"  embedded {nice} {wt}")
    return out


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    src, dst = sys.argv[1], sys.argv[2]
    doc = open(src, encoding="utf-8").read()

    # drop the network font requests; they are what fail
    doc = re.sub(r'<link rel="preconnect"[^>]*>\s*', "", doc)
    doc = re.sub(r'<link href="https://fonts\.googleapis\.com[^>]*>\s*', "", doc)

    css = "\n".join(_faces())
    doc = doc.replace(
        "<style>",
        "<style>\n/* typefaces inlined by embed-fonts.py so rendering cannot fall back */\n" + css + "\n",
        1,
    )
    open(dst, "w", encoding="utf-8").write(doc)
    print(f"wrote {dst} ({os.path.getsize(dst) // 1024} KB)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
