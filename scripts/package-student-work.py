"""Package completed teaching submissions and the actual runnable class code."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent.parent
public = root / 'docs/public'
with ZipFile(public / 'downloads/is117-example-products.zip', 'w', ZIP_DEFLATED) as archive:
    archive.writestr('START-HERE.txt', """IS117 SQLITE STARTER — CAMPUS COTTON FIRST

1. Install Node 24 or newer.
2. Open a terminal in the extracted samples folder.
3. Run: node server.mjs
4. Open the printed Campus Cotton URL. Try A, then compare B.
5. Save a synthetic order, copy its reference, stop/restart the server,
   and check that the same reference remains in Demo order history.

The other five examples are references, not five more assignments.
Adapt Campus Cotton for your own audience and explain your changes.
No real orders, payments, email, or personal data. Use demo@example.test.
Full instructions: https://kaw393939.github.io/is117-demo-days/examples/submissions/run-examples.html
Product pages run locally; documentation links open the published guide.
""")
    for path in sorted((public / 'samples').rglob('*')):
        if path.is_file(): archive.write(path, path.relative_to(public))
with ZipFile(public / 'downloads/is117-graded-student-submissions.zip', 'w', ZIP_DEFLATED) as archive:
    archive.writestr('README.txt', '''IS117 — SIX COMPLETED FICTIONAL STUDENT SUBMISSIONS

Start in student-work/: two T-shirt stores, two group businesses, two portfolios.
Each folder contains completed research, two specifications, product comparison,
a peer/change/retest scenario, and rubric scores with instructor feedback.
Section 007 portfolio Research is the career role cards and reflection;
reference-site research and its practice grade in portfolio packets are optional.

These are fictional people and scenario grades, not actual student records.
The peer conversations are invented worked examples, not real interviews.
The separate technical receipt lists checks actually run on the real demo code.

To run the products, install Node 24, open a terminal in this extracted folder,
and run: node product-source/server.mjs
Use the printed local URL. The server stores synthetic records in SQLite.
The public versions use browser storage; no actual orders or bookings occur.
Portfolio profile content is completed but fictional; real students use real accounts.

Live guide: https://kaw393939.github.io/is117-demo-days/examples/submissions/
Some links in the Markdown documents use site-relative guide URLs. Use the
published guide for those links or inspect matching product-source files locally.
''')
    for directory, prefix in [(public/'student-work', 'student-work'), (public/'samples', 'product-source')]:
        for path in sorted(directory.rglob('*')):
            if path.is_file(): archive.write(path, Path(prefix) / path.relative_to(directory))
    archive.write(root/'data/graded-examples.json', 'assessment-data.json')
    for name in ['grading-guide', 'technical-checks']:
        archive.write(root/f'docs/examples/submissions/{name}.md', f'{name}.md')
print('Packaged both source downloads, including all six completed submissions and their assessments.')
