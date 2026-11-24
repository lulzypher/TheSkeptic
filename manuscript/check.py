import re
src = open('/tmp/tsk/chapter4.html').read()
body = src[src.index('<main>') : src.index('</main>')]
for t in ['h1','h2','h3','div','p','table']:
    o = len(re.findall(r'<' + t + r'[\s>]', body))
    c = len(re.findall(r'</' + t + r'>', body))
    print(t + ': open=' + str(o) + ' close=' + str(c) + ' ' + ('OK' if o==c else 'MISMATCH'))
print()
print('h3 headers:')
for m in re.finditer(r'<h3[^>]*>(.*?)</h3>', body, re.S):
    print(' -', re.sub(r'\s+',' ', m.group(1))[:80])
print()
print('h3 followed by rule:', sum(1 for m in re.finditer(r'</h3>\s*\n\s*<div class="rule">', body)))
