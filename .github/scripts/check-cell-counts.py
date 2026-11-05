"""Compares a freshly built cell site tile set with the published one, and fails if it shrank too much.

    python -I check-cell-counts.py PUBLISHED_DIR NEW_DIR [MAX_DROP]

Counts sites per source by reading every tile (so it works on data published before index.json carried counts).
Exits 1 if the total, or any source that had sites before, dropped by more than MAX_DROP (default 0.2 = 20%).
"""
import glob
import json
import os
import sys
from collections import Counter


def count(directory):
    counts = Counter()
    for path in glob.glob(os.path.join(directory, '*.json')):
        if os.path.basename(path) == 'index.json':
            continue
        with open(path) as f:
            tile = json.load(f)
        names = tile['sources']
        for s in tile['sites']:
            counts[names[s[6]]] += 1
    return counts


def main():
    old_dir, new_dir = sys.argv[1], sys.argv[2]
    max_drop = float(sys.argv[3]) if len(sys.argv) > 3 else 0.2
    old, new = count(old_dir), count(new_dir)
    rows = [(src, old[src], new[src]) for src in sorted(set(old) | set(new))]
    rows.append(('total', sum(old.values()), sum(new.values())))
    failed = []
    print(f'{"source":8} {"published":>10} {"new":>10} {"change":>8}')
    for src, a, b in rows:
        change = f'{(b - a) / a:+.1%}' if a else 'new'
        print(f'{src:8} {a:>10} {b:>10} {change:>8}')
        if a and b < a * (1 - max_drop):
            failed.append(src)
    if not sum(new.values()):
        failed.append('total (no sites built)')
    if failed:
        print(f'::error::Site count dropped more than {max_drop:.0%} for: {", ".join(failed)}. Not publishing.')
        sys.exit(1)
    print('Counts OK')


if __name__ == '__main__':
    main()
