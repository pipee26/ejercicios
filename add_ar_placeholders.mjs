import fs from 'fs';

const filePath = 'data/exercises.json';
console.log('Loading dataset...');
let exercises = JSON.parse(fs.readFileSync(filePath, 'utf8'));

console.log(`Processing ${exercises.length} exercises...`);
for (let ex of exercises) {
  // Add Arabic placeholders using English content
  if (ex.instructions && ex.instructions.en) {
    if (!ex.instructions.ar) {
      ex.instructions.ar = ex.instructions.en;
    }
  }
  
  if (ex.instruction_steps && ex.instruction_steps.en) {
    if (!ex.instruction_steps.ar) {
      ex.instruction_steps.ar = [...ex.instruction_steps.en];
    }
  }
}

console.log('Saving updated dataset...');
fs.writeFileSync(filePath, JSON.stringify(exercises, null, 2), 'utf8');
console.log('Done! Added Arabic placeholders to all exercises.');
