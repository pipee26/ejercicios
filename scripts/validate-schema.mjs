#!/usr/bin/env node
// Validates data/exercises.json against data/exercises.schema.json (JSON Schema 2020-12).
//
//   npm i ajv            # once — the repo keeps no package.json on purpose
//   node scripts/validate-schema.mjs
//
// Exits 0 when the dataset is valid, 1 with a report otherwise. This is the same
// check .github/workflows/validate.yml runs on every push and pull request.

import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import Ajv2020 from 'ajv/dist/2020.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const schema = JSON.parse(readFileSync(join(root, 'data', 'exercises.schema.json'), 'utf8'))
const data = JSON.parse(readFileSync(join(root, 'data', 'exercises.json'), 'utf8'))

const ajv = new Ajv2020({ allErrors: false, validateFormats: false })
const validate = ajv.compile(schema)

if (!validate(data)) {
  console.error(`✗ ${validate.errors.length} schema violation(s):`)
  for (const e of validate.errors.slice(0, 20)) console.error('  ' + JSON.stringify(e))
  process.exit(1)
}
console.log(`✓ valid — ${data.length} exercises against exercises.schema.json`)
