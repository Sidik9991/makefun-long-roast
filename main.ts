// The Long Roast: Lawmakers and the Internet — entry generator.
// Holds candidate one-sentence roasts, scores each 0-2 on five criteria
// (weights 5/4/3/2/1, mirroring the judge's brief), picks the winner at
// runtime, writes it to /output/entry.txt and validates the gate:
// exactly one line, exactly one sentence, 1-320 chars, non-blank.

import { writeFileSync, readFileSync, mkdirSync } from "node:fs";

const OUT = "/output/entry.txt";

// Criteria, most important first (weights 5,4,3,2,1):
//  onSubject - a roast of lawmakers who regulate AI/crypto/internet yet
//              cannot convert a file to PDF
//  turn      - sets up the lawmaker's authority, then undercuts it with
//              the file they cannot convert
//  aim       - stays on lawmakers and their rules: power and competence
//  clean     - reads clean in one pass, punch lands on the last words
//  fresh     - a specific, unexpected detail over a worn cliche
const WEIGHTS = [5, 4, 3, 2, 1];

const CANDIDATES = [
  {
    title: "The Fax",
    line: "She introduced a bill to police the entire internet on Tuesday, and on Wednesday her office faxed a screenshot of a Word document to the clerk because nobody there could find 'Export to PDF'.",
    scores: [2, 2, 2, 2, 2],
  },
  {
    title: "Sandwich Button",
    line: "He voted to regulate artificial intelligence in the morning and spent the afternoon asking his staff whether the PDF button was a type of sandwich.",
    scores: [2, 1, 2, 1, 1],
  },
  {
    title: "Photo of the Monitor",
    line: "The senator demanded a hearing on encryption, then emailed the committee a photo of his monitor because the file would not 'turn into a PDF by itself'.",
    scores: [2, 2, 1, 1, 2],
  },
  {
    title: "Scan It Back In",
    line: "She wrote forty pages of internet law and then printed the whole bill just to scan it back in as a picture.",
    scores: [2, 1, 2, 1, 1],
  },
  {
    title: "Stuck Inside the Computer",
    line: "They banned an app they could not open, then adjourned because the agenda was 'stuck inside the computer' as a Word file nobody could convert.",
    scores: [2, 1, 1, 2, 1],
  },
  {
    title: "Hiding From Oversight",
    line: "His crypto bill runs to ninety pages, every one of them faxed, because the export menu was, in his words, 'hiding from oversight'.",
    scores: [2, 2, 2, 1, 1],
  },
  {
    title: "Double-Click the Printout",
    line: "The committee chair subpoenaed the algorithm on Monday and by Friday was still trying to double-click the PDF icon on a printed page.",
    scores: [2, 2, 1, 2, 2],
  },
  {
    title: "Final_v2_REAL",
    line: "She regulates the cloud for a living and stores her only copy of the bill on a floppy disk labelled 'FINAL_v2_REAL.pdf.docx'.",
    scores: [2, 1, 2, 2, 2],
  },
  {
    title: "Stop Being a Word Document",
    line: "He promised to drag the internet into the twenty-first century, right after someone showed him which button makes the Word document stop being a Word document.",
    scores: [2, 1, 1, 1, 1],
  },
  {
    title: "Google It Into Existence",
    line: "The lawmaker who wants to license every AI model asked the clerk to 'just Google the PDF into existence' during a hearing on digital competence.",
    scores: [2, 2, 1, 1, 1],
  },
];

function total(c) {
  return c.scores.reduce((sum, s, i) => sum + s * WEIGHTS[i], 0);
}

function countSentences(text) {
  // Ignore dots that belong to file extensions (e.g. ".docx", ".pdf")
  // before counting sentence-ending punctuation.
  const stripped = text.replace(/\.[A-Za-z0-9]{2,5}\b/g, "");
  const ends = stripped.match(/[.!?]/g);
  return ends ? ends.length : 0;
}

function validate(text) {
  const problems = [];
  if (text.includes("\n") || text.includes("\r")) problems.push("not one line");
  if (text.trim().length === 0) problems.push("blank");
  if (text.length < 1 || text.length > 320)
    problems.push(`length ${text.length} outside 1-320`);
  const n = countSentences(text);
  if (n !== 1) problems.push(`sentence count ${n}, expected 1`);
  return problems;
}

const ranked = [...CANDIDATES].sort((a, b) => total(b) - total(a));
for (const c of ranked) console.log(`${total(c)}/30  ${c.title}`);
const winner = ranked[0];
console.log(`winner: "${winner.title}" (${winner.line.length} chars)`);

if (winner.title !== "The Fax")
  throw new Error(`gate: expected "The Fax" to win, got "${winner.title}"`);

const problems = validate(winner.line);
if (problems.length) throw new Error(`gate: ${problems.join("; ")}`);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT, winner.line, "utf8");

const back = readFileSync(OUT, "utf8");
if (back !== winner.line) throw new Error("gate: /output/entry.txt mismatch");
const backProblems = validate(back);
if (backProblems.length)
  throw new Error(`gate: written file invalid: ${backProblems.join("; ")}`);

console.log(
  `gate OK: one line, one sentence, ${back.length} chars -> ${OUT}`
);
