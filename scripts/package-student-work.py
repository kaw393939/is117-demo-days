"""Package completed teaching submissions and the actual runnable class code."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent.parent
public = root / 'docs/public'
with ZipFile(public / 'downloads/is117-example-products.zip', 'w', ZIP_DEFLATED) as archive:
    for path in sorted((public / 'samples').rglob('*')):
        if path.is_file(): archive.write(path, path.relative_to(public))
with ZipFile(public / 'downloads/is117-graded-student-submissions.zip', 'w', ZIP_DEFLATED) as archive:
    archive.writestr('README.txt', '''IS117 — SIX COMPLETED FICTIONAL STUDENT SUBMISSIONS

Start in student-work/: two T-shirt stores, two group businesses, two portfolios.
Each folder contains completed research, two specifications, product comparison,
a peer/change/retest scenario, and rubric scores with instructor feedback.

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
