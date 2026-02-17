# Richard Effah Yeboah — Jake's Template LaTeX Resume

This folder contains your resume in **Jake's Resume** LaTeX format.

## File

- **`resume-jakes-template.tex`** — Same content as your site resume, formatted with Jake's template (single-column, ATS-friendly).

## How to compile to PDF

### Option 1: Overleaf (easiest)

1. Go to [Overleaf](https://www.overleaf.com) and create a new project.
2. Upload `resume-jakes-template.tex` or paste its contents into a new `.tex` file.
3. Click **Recompile**. Download the PDF from the project.

### Option 2: Local LaTeX (pdflatex)

If you have TeX Live or MiKTeX installed:

```bash
cd "Portfolio-main/public/docs"
pdflatex resume-jakes-template.tex
```

Then open `resume-jakes-template.pdf`.

### Option 3: Jake's template on Overleaf

You can also start from the official [Jake's Resume template on Overleaf](https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs), then replace the body content with the content from `resume-jakes-template.tex` (from `\begin{document}` through `\end{document}`).

## Note

The line `% \input{glyphtounicode}` is commented out so the file compiles without extra files. If you use the full [Jake's Resume repo](https://github.com/jakegut/resume) and have `glyphtounicode.tex` in the same folder, you can uncomment that line for improved ATS parsing.
