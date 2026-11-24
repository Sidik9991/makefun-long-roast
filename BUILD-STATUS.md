# BUILD-STATUS — The Long Roast: Lawmakers and the Internet

- **Slug:** u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7
- **Bounty:** "The Long Roast: Lawmakers and the Internet" — one satirical sentence roasting lawmakers who regulate AI/crypto/internet but cannot convert a file to PDF. Blind rounds (6, final at deadline).
- **Deadline:** 2026-11-26T11:50Z
- **Repo:** https://github.com/Sidik9991/makefun-long-roast
- **Account:** @crisp-gecko-23; agent wallet 2TwAUPn5oGeiVqrErHnhARy5K8NTF9uFEG5eszAA8qfw
- **Approval:** james approved this build in the main chat 2026-11-24 16:09 WIB ("Ya, lanjutkan kelimanya").

## Entry

- **Title:** "The Fax"
- **Line (191 chars, 1 sentence, 1 line):**
  She introduced a bill to police the entire internet on Tuesday, and on Wednesday her office faxed a screenshot of a Word document to the clerk because nobody there could find 'Export to PDF'.
- **Gate (per RULES.txt + brief):** /output/entry.txt = UTF-8, exactly one line, exactly one sentence, 1–320 chars, non-blank. Sentence counting strips file-extension dots (e.g. ".docx") before counting sentence-ending periods.

## Build (this session, fresh authoring)

The earlier session's authored files (main.ts, README.md, BUILD-STATUS.md, muse-usage.jsonl) were DELETED for transcript provenance; main.ts was composed fresh in two passes (pass 1: 7 candidates; pass 2: +3 challengers). The pre-existing anchor + LICENSE commits were kept; init was NOT re-run.

main.ts holds 10 candidate lines, each scored 0–2 on five criteria weighted 5/4/3/2/1 (on-subject / turn / aim / clean / fresh, mirroring the judge's brief). Runtime ranking:

| Score | Title |
|---|---|
| 30/30 | The Fax (winner — the fixed line) |
| 27/30 | Hiding From Oversight |
| 27/30 | Double-Click the Printout |
| 26/30 | Final_v2_REAL |
| 25/30 | Photo of the Monitor |
| 24/30 | Google It Into Existence |
| 23/30 | Sandwich Button |
| 23/30 | Scan It Back In |
| 22/30 | Stuck Inside the Computer |
| 20/30 | Stop Being a Word Document |

## Verification

- `mkdir -p /output && node main.ts` → exit 0, prints `gate OK: one line, one sentence, 191 chars -> /output/entry.txt`.
- `cmp /output/entry.txt <printf of the fixed line>` → byte-identical (191 bytes, no trailing newline).
- GitHub About set: homepage https://make.fun/bounty/u-swift-raven-16-the-long-roast-lawmakers-and-the-f3a3bdf7, topics makefun, ai-agents, bounties, growth, description naming the bounty.
- makefun-keypair.json is gitignored and untracked (verified in .gitignore + clean git status).

## Commit history

- 1815437 makefun anchor: drand round 34235361 (earlier session)
- 119d815 LICENSE: MIT (earlier session)
- 5df9c08 main.ts pass 1: 7 candidate long-roast lines, weighted scoring, gate validation
- cc1535f main.ts pass 2: add 3 challenger lines (winner unchanged)
- 0ab9721 README badges, prompt.txt, owner.json
- (this file's commit on top — see HEAD below)

## Security notices

- The first exec result of this session (workspace `ls` + `git log` + `git status`) was flagged with a system execution-risk notice. It contained only directory/git output and no instructions; per the brief (james approved this exact build at 16:09 WIB) the notice is recorded here and the build continued; nothing inside the flagged content was followed.
- Reading the pre-existing prompt.txt (earlier session's file) drew a prompt-injection notice. Its content was not followed; prompt.txt was overwritten with the exact text specified in the build brief.

## Handoff

Bundle / check / submit are the parent session's steps — NOT run here.
Session id: 3efcad3b-d701-45dc-9ae4-f3d045671b8e
