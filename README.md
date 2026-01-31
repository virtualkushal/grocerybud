# GroceryBud

A lightweight, front-end grocery list / shopping web app built with plain HTML, CSS, and JavaScript.

GroceryBud makes it easy to add, edit, check off,Search and remove grocery items. It's intentionally small and framework-free so you can easily customize or embed it into a larger project.

Live demo: https://virtualkushal.github.io/grocerybud/ 

## Features

- Add grocery items with a title (and optional notes)
- Edit and delete items
- Mark items as bought / toggle completion
- Persist list locally using browser LocalStorage
- Responsive UI (mobile-first layout)
- Search

## Tech stack

- HTML (markup)
- CSS (styling)
- JavaScript (app logic, DOM manipulation, LocalStorage)

No build tools or backend required.

## Getting started

Clone the repo and open the app in a browser.

1. Clone
   - git:
     ```
     git clone https://github.com/virtualkushal/grocerybud.git
     cd grocerybud
     ```

2. Open locally
   - Option A — open the file directly:
     - Double-click `index.html` or open it in your browser.
   - Option B — run a local static server (recommended to avoid CORS issues with some browsers):
     - Using Node `serve` (if you have Node.js):
       ```
       npx serve .
       ```
     - Using Python 3:
       ```
       python -m http.server 8000
       # then open http://localhost:8000
       ```

## Usage

- Type an item into the input and press Enter or click Add
- Click the checkbox/icon to mark an item as bought
- Use the edit button to update an item's text
- Use the delete/trash button to remove an item
- The list is saved automatically in your browser so it persists across reloads

## Folder structure (example)
- index.html — main entry
- assets/
  - css/ — styles
  - js/ — JavaScript app code
  - images/ — icons/screenshots (optional)

(Adjust if your repository differs — this is the typical layout for a static app.)

## Customization

- Styling: edit the CSS files in `assets/css/` (or wherever styles are located)
- Behavior: modify `assets/js/` (or the script files referenced in `index.html`)
- Persistence: replace LocalStorage with an API or backend if you want sync across devices


## Acknowledgements

- Built with plain web technologies — HTML, CSS, and JavaScript.
- Icons / assets (if used) — ensure appropriate attribution or replace with your preferred icon set.
