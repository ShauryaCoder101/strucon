#!/usr/bin/env bash
# Rebuild the single client report PDF from docs/client-report.html.
# Author metadata is stamped afterwards; edit the HTML, then run this.
set -e
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
OUT="$ROOT/docs/pdf/STRUCON-Website-Review-and-Recommendation.pdf"
"/c/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless=new --disable-gpu --no-sandbox --no-pdf-header-footer \
  --run-all-compositor-stages-before-draw --virtual-time-budget=10000 \
  --print-to-pdf="$OUT" "file:///${ROOT#/}/docs/client-report.html"
python -c "
import fitz,os,sys
f=r'$OUT'
d=fitz.open(f)
d.set_metadata({'author':'Shaurya Sharma','title':'STRUCON Website - Review & Recommendation',
 'subject':'STRUCON Consulting Private Limited - website review',
 'creator':'Shaurya Sharma','producer':'Shaurya Sharma'})
t=f+'.tmp'; d.save(t); d.close(); os.replace(t,f)
print('pages:', fitz.open(f).page_count)
"
