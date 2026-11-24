# The Fax — The Long Roast: Lawmakers and the Internet

[![bounty](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![rank](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/Sidik9991/makefun-long-roast/rank.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)
[![reward](https://make.fun/badge/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7/reward.svg)](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7)

Entry for make.fun's [The Long Roast: Lawmakers and the Internet](https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7) bounty — one satirical sentence roasting lawmakers who would regulate AI, crypto or the internet but cannot convert a file to PDF.

## The entry

> She introduced a bill to police the entire internet on Tuesday, and on Wednesday her office faxed a screenshot of a Word document to the clerk because nobody there could find 'Export to PDF'.

One sentence, one line, 191 characters.

## How it works

`main.ts` (Node, no dependencies) holds ten candidate one-sentence roasts as data. Each is scored 0–2 on five criteria weighted 5/4/3/2/1, mirroring the judge's brief: on-subject (the lawmaker regulates tech yet cannot convert a file to PDF), the turn (authority set up, then undercut by the unconvertible file), aim (power and competence, not random abuse), clean quotable read with the punch on the last words, and a specific fresh detail over a worn cliché. The winner is picked at runtime, written to `/output/entry.txt`, then re-read and validated against the gate — exactly one line, exactly one sentence (dots inside file extensions like `.docx` are stripped before counting sentence-ending periods), 1–320 characters, non-blank — and the program fails loudly if any check fails.

Run it with:

```sh
mkdir -p /output && node main.ts
```
