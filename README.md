# Think&Speak! — teacher pamphlet

The interactive flipbook pamphlet for **Think&Speak!**, a free civil discourse
workshop that Come to the Table Project brings into elementary classrooms in
Monterey, California.

**Live:** https://think-and-speak.vercel.app

## What is in here

| Path | What it is |
|---|---|
| `index.html` | The entire site — markup, styles, and the page-turning script. This is the only file you edit to change pamphlet content. |
| `assets/` | Logo, founder photo, Come to the Table mark, favicon, and the subsetted TSRound display font. |
| `tools/make-pdf.mjs` | Generates a print-ready `pamphlet.pdf` from `index.html`. |
| `vercel.json` | Static hosting config — long cache headers on `assets/`. |

There is no build step and no dependencies. Open `index.html` in a browser and
it runs.

## Editing the pamphlet

All eight pages live in `index.html` as `.face` elements inside `.leaf`
wrappers. Each `.leaf` is one sheet of the book: its `.face.front` is the
right-hand page and its `.face.back` is the page you see after the turn.

```
.leaf  ->  .face.front  (cover)          .face.back  (page 1)
.leaf  ->  .face.front  (page 2)         .face.back  (page 3)
.leaf  ->  .face.front  (page 4, Zamina) .face.back  (page 5, booking)
.leaf  ->  .face.front  (closing)        .face.back  (back cover)
```

To change wording, find the page in the markup and edit the text. The page
number in each footer is written literally in the `.pageno` div — if you add or
remove a page, renumber them by hand.

After editing, regenerate the PDF used as the email attachment:

```
npm install playwright && npx playwright install chromium
node tools/make-pdf.mjs
```

### Brand colors

Defined once as CSS variables at the top of `index.html`:

| Variable | Hex | Used for |
|---|---|---|
| `--navy` | `#1e4e79` | Headings, page numbers, buttons |
| `--navy-deep` | `#16395a` | Quote card text, gradients |
| `--flame` | `#d94f2b` | Accents, eyebrows, the exclamation mark |
| `--flame-soft` | `#f8e3db` | Alternating card backgrounds |
| `--sky` | `#e8f0f7` | Card and quote backgrounds |
| `--paper` | `#fffdf9` | Page background |
| `--ink` | `#243b53` | Body text |

Headings use TSRound (a subsetted custom face in `assets/`), falling back to
Arial Rounded MT Bold. Body text is Avenir Next with system fallbacks.

### Writing the name

Always **Think&Speak!** — no spaces around the ampersand, exclamation point
always included. The exclamation point is part of the name, not punctuation for
the surrounding sentence.

## Deploying

Hosted on Vercel under the `sophia-a951` account, project
`think-and-speak-pamphlet`, connected to this repository. Every push to `main`
deploys automatically. The production URL never changes, so links already shared
in emails keep working.

## Printing

The print stylesheet in `index.html` flattens the 3D book into stacked full
pages and hides the navigation, so printing straight from the browser works.
`tools/make-pdf.mjs` produces the same thing as a US Letter PDF.

## Contact

Zamina Singh, Founder — thinkandspeakmonterey@gmail.com
Instagram [@cometothetable_project](https://instagram.com/cometothetable_project)
