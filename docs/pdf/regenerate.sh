#!/usr/bin/env bash
# Rebuild both client PDFs from their HTML sources in ../ .
#
#   1. "What We Still Need"            <- docs/doc-a-what-we-need.html
#   2. "Key points on the new strucon site"  <- docs/doc-b-rationale.html
#
# Document 2 is rendered from a temporary copy with the typefaces inlined
# (see docs/embed-fonts.py). Rendering it straight from the source would let
# Chrome fall back to Segoe UI, and its type specimens would then show the
# wrong fonts. Author metadata is stamped on both afterwards.
#
# Usage: ./regenerate.sh [1|2]     (no argument rebuilds both)
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
DOCS="$ROOT/docs"
PDF="$DOCS/pdf"
CHROME="/c/Program Files/Google/Chrome/Application/chrome.exe"
AUTHOR="Shaurya Sharma"

[ -x "$CHROME" ] || { echo "Chrome not found at $CHROME" >&2; exit 1; }

# render <source.html> <output.pdf>
render() {
  "$CHROME" --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
    --run-all-compositor-stages-before-draw --virtual-time-budget=25000 \
    --print-to-pdf="$2" "file:///${1#/}" 2>/dev/null | tail -1
}

# stamp <output.pdf> <title>
stamp() {
  python - "$1" "$2" <<'PY'
import fitz, os, sys
f, title = sys.argv[1], sys.argv[2]
d = fitz.open(f)
d.set_metadata({
    "author": "Shaurya Sharma", "title": title,
    "subject": "STRUCON Consulting Private Limited - website project",
    "creator": "Shaurya Sharma", "producer": "Shaurya Sharma",
    "keywords": "STRUCON, structural engineering, steel detailing, website",
})
tmp = f + ".tmp"
d.save(tmp, garbage=3, deflate=True)
d.close()
os.replace(tmp, f)
d = fitz.open(f)
print(f"  {os.path.basename(f)} - {d.page_count} pages, {os.path.getsize(f)//1024} KB")
PY
}

want="${1:-both}"

if [ "$want" = "1" ] || [ "$want" = "both" ]; then
  echo "Document 1 - What We Still Need"
  out="$PDF/1_STRUCON-What-We-Still-Need.pdf"
  render "$DOCS/doc-a-what-we-need.html" "$out" >/dev/null
  stamp "$out" "STRUCON Website - What We Still Need From You"
fi

if [ "$want" = "2" ] || [ "$want" = "both" ]; then
  echo "Document 2 - Key points on the new strucon site"
  tmp_html="$DOCS/.doc-b-rationale.print.html"
  python "$DOCS/embed-fonts.py" "$DOCS/doc-b-rationale.html" "$tmp_html" | sed 's/^/  /'
  out="$PDF/Key points on the new strucon site.pdf"
  render "$tmp_html" "$out" >/dev/null
  stamp "$out" "STRUCON Website - Design & Engineering Rationale"
  rm -f "$tmp_html"
fi

echo "Done."
