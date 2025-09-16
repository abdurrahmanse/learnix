#!/usr/bin/env node
/*
Validates that en.json and bd.json have consistent key shapes and reports missing keys.
*/
const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..', 'src', 'assets', 'locales')
const en = JSON.parse(fs.readFileSync(path.join(root, 'en.json'), 'utf8'))
const bd = JSON.parse(fs.readFileSync(path.join(root, 'bd.json'), 'utf8'))

function diffKeys(a, b, prefix = '') {
  const missing = []
  const extra = []
  const keys = new Set([...Object.keys(a || {}), ...Object.keys(b || {})])
  for (const k of keys) {
    const pa = a ? a[k] : undefined
    const pb = b ? b[k] : undefined
    const p = prefix ? `${prefix}.${k}` : k
    if (pa == null && pb != null) extra.push(p)
    else if (pa != null && pb == null) missing.push(p)
    else if (pa && pb && typeof pa === 'object' && typeof pb === 'object' && !Array.isArray(pa) && !Array.isArray(pb)) {
      const sub = diffKeys(pa, pb, p)
      missing.push(...sub.missing)
      extra.push(...sub.extra)
    }
  }
  return { missing, extra }
}

const { missing, extra } = diffKeys(en, bd)
if (!missing.length && !extra.length) {
  console.log('Locales look consistent: no missing or extra keys')
  process.exit(0)
}
if (missing.length) console.log('Missing in bd.json:', missing)
if (extra.length) console.log('Extra in bd.json:', extra)
process.exit(0)
