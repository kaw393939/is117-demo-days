"""Package completed teaching submissions and the actual runnable class code."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
root = Path(__file__).resolve().parent.parent
public = root / 'docs/public'
with ZipFile(public / 'downloads/is117-example-products.zip', 'w', ZIP_DEFLATED) as archive:
    archive.writestr('START-HERE.txt', """IS117 BROWSER STORAGE STARTER

Try Campus Cotton: https://keithwilliams.org/is117-demo-days/samples/campus-cotton/a.html
Save a fake order, copy the reference, reload, and open Demo order history.
Version B can read the same history on this site.

To make the prototype your own, publish these files on GitHub Pages.
Keep prototype-storage.js next to the samples folder. Demo records
stay in this browser. Use fake details only.
Guide: https://keithwilliams.org/is117-demo-days/examples/submissions/run-examples.html
""")
    archive.write(public / 'prototype-storage.js', 'prototype-storage.js')
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

Use the live examples or publish the extracted files on GitHub Pages.
Keep prototype-storage.js beside product-source. These clickable prototypes
save fake orders and requests in the same browser.
Portfolio profile content is completed but fictional; real students use real accounts.

Live guide: https://kaw393939.github.io/is117-demo-days/examples/submissions/
Some links in the Markdown documents use site-relative guide URLs. Use the
published guide for those links or inspect matching product-source files locally.
''')
    for directory, prefix in [(public/'student-work', 'student-work'), (public/'samples', 'product-source')]:
        for path in sorted(directory.rglob('*')):
            if path.is_file(): archive.write(path, Path(prefix) / path.relative_to(directory))
    archive.write(public / 'prototype-storage.js', 'prototype-storage.js')
    archive.write(root/'data/graded-examples.json', 'assessment-data.json')
    for name in ['grading-guide', 'technical-checks']:
        archive.write(root/f'docs/examples/submissions/{name}.md', f'{name}.md')
with ZipFile(public / 'student-trial-source.zip', 'w', ZIP_DEFLATED) as archive:
    archive.write(public / 'prototype-storage.js', 'prototype-storage.js')
    for path in sorted((public / 'student-trial').rglob('*')):
        if path.is_file():
            archive.write(path, path.relative_to(public))
print('Packaged the starter, six completed submissions, and three-project rehearsal.')
