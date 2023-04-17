# Markup
# Use a #markup card to display formatted content using #HTML.
# ---
from py.h2o_wave.h2o_wave import site, ui

page = site['/demo']

menu = '''
<ol>
    <li>Spam</li>
    <li>Ham</li>
    <li>Eggs</li>
</ol>
'''

# Markup card with default padding
page['example1'] = ui.markup_card(
    box='1 1 2 2',
    title='Menu',
    content=menu,
)

# Markup card with padding
page['example2'] = ui.markup_card(
    box='3 3 2 2',
    title='Menu',
    content=menu,
    compact=False
)

# Markup card with no padding
page['example3'] = ui.markup_card(
    box='5 5 2 2',
    title='Menu',
    content=menu,
    compact=True
)

page.save()
