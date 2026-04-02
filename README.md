# Iceland Travel — Responsive Landing Page

A responsive landing page about traveling to Iceland. Built with Gulp 5 and Slick Carousel, optimized for GitHub Pages.

## 🛠 Tech Stack & Libraries
* **jQuery** (Core dependency)
* **Slick Carousel** (Tour Program and Reviews sections)
* **Magnific Popup** (Gallery and Modal forms)
* **WOW.js + Animate.css** (Scroll animations)
* **jQuery Mask Plugin** (Phone number input masking)

## 📦 Local Setup & Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/iceland-travel.git](https://github.com/your-username/iceland-travel.git)
    ```

2.  **Install dependencies** (Requires [Node.js](https://nodejs.org/)):
    ```bash
    npm install
    ```

3.  **Run Gulp** to build the project and start watching for changes:
    ```bash
    gulp watch
    ```

## 📂 Project Structure
* `src/` — Source files (SCSS, JS, Images).
* `dist/` — Production-ready build (This folder **must** be pushed to GitHub).
    * `dist/libs/` — External libraries mirrored from `node_modules`.
    * `dist/styles/` — Compiled and minified CSS.
    * `dist/scripts/` — Main application logic (`main.js`).

## 🌐 GitHub Pages Configuration
The project is configured to run on GitHub Pages from the root directory. Assets are linked via the dist/ folder. Ensure dist/ is not in your .gitignore.
