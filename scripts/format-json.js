#!/usr/bin/env node
/* Recursively sort keys and pretty print JSON files in locales. */
const fs = require('fs')
const path = require('path')

function sortKeys(value) {
  if (Array.isArray(value)) return value.map(sortKeys)
  if (value && typeof value === 'object') {
    return Object.keys(value)
      .sort((a, b) => a.localeCompare(b))
      .reduce((acc, k) => {
        acc[k] = sortKeys(value[k])
        return acc
      }, {})
  }
  return value
}

const root = path.join(__dirname, '..')
const targets = [
  path.join(root, 'src', 'assets', 'locales', 'en.json'),
  path.join(root, 'src', 'assets', 'locales', 'bd.json'),
]

for (const file of targets) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))
  const sorted = sortKeys(json)
  fs.writeFileSync(file, JSON.stringify(sorted, null, 2) + '\n', 'utf8')
  console.log('Formatted', path.relative(root, file))
}
