#!/usr/bin/env node
// Validates data/exercises.json against data/exercises.schema.json (JSON Schema 2020-12)
// and runs two content-integrity checks so a regression can never ship silently:
//
//   1. NO English fallbacks — every Arabic text must be a real translation, never a
//      verbatim copy of the English text (paragraph and steps, compared literally).
//   2. NO forbidden literal phrases — the Arabic translations follow a reviewed style
//      guide; a banned literal phrasing (e.g. "توقف للحظة") fails the check.
//
//   npm i ajv@^8         # once — the repo keeps no package.json on purpose
//   node scripts/validate-schema.mjs
//
// Exits 0 when the dataset is valid and clean, 1 with a report otherwise. This is the
// same check .github/workflows/validate.yml runs on every push and pull request.

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv2020 from 'ajv/dist/2020.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const schema = JSON.parse(readFileSync(join(root, 'data', 'exercises.schema.json'), 'utf8'))
const data = JSON.parse(readFileSync(join(root, 'data', 'exercises.json'), 'utf8'))

let failed = false

/* ---- 1) schema validation ---- */
const ajv = new Ajv2020({ allErrors: false, validateFormats: false })
const validate = ajv.compile(schema)
if (!validate(data)) {
  console.error(`✗ ${validate.errors.length} schema violation(s):`)
  for (const e of validate.errors.slice(0, 20)) console.error('  ' + JSON.stringify(e))
  failed = true
} else {
  console.log(`✓ valid — ${data.length} exercises against exercises.schema.json`)
}

/* ---- 2) no English fallbacks ---- */
const enFallbackIds = []
for (const ex of data) {
  const pAr = String(ex.instructions?.ar ?? '').trim()
  const pEn = String(ex.instructions?.en ?? '').trim()
  const sAr = JSON.stringify(ex.instruction_steps?.ar ?? [])
  const sEn = JSON.stringify(ex.instruction_steps?.en ?? [])
  if ((pAr && pAr === pEn) || (sAr !== '[]' && sAr === sEn)) enFallbackIds.push(ex.id)
}
if (enFallbackIds.length) {
  console.error(`✗ ${enFallbackIds.length} exercise(s) have instructions.ar copied verbatim from English: ${enFallbackIds.join(', ')}`)
  failed = true
} else {
  console.log('✓ no English fallbacks — every instructions.ar / instruction_steps.ar is a real translation')
}

/* ---- 3) no forbidden literal phrases ---- */
const FORBIDDEN = [
  'توقف للحظة', 'عند ذروة الحركة', 'وضعية البداية', 'لعدد التكرارات المطلوب',
  'بشكل مسطح', 'بشكل مستقيم', 'بشكل عمودي', 'بشكل كامل',
  'قم بتدوير', 'قم بإمالة', 'قم بلف', 'قم بالضغط',
  'عضلات الألوية', 'منقبض', 'بحيث يكون', 'المجنص', 'ركبتها', 'كاحلها'
]
const hits = new Map()
for (const ex of data) {
  const texts = [String(ex.instructions?.ar ?? '')]
  for (const step of ex.instruction_steps?.ar ?? []) texts.push(String(step))
  for (const text of texts) {
    for (const phrase of FORBIDDEN) {
      if (text.includes(phrase)) hits.set(phrase, (hits.get(phrase) || 0) + 1)
    }
  }
}
if (hits.size) {
  console.error('✗ forbidden literal phrases found in Arabic texts:')
  for (const [phrase, count] of hits) console.error(`  "${phrase}" × ${count}`)
  failed = true
} else {
  console.log('✓ no forbidden literal phrases in any Arabic text')
}

if (failed) process.exit(1)
console.log('✓ all checks passed')
