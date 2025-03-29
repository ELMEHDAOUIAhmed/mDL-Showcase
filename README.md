# mDL-Showcase

A modern, dark-themed website to showcase a Mobile Driving License Solution compliant with ISO 18013-5. This project is built with React and Vite, incorporating smooth native CSS and JavaScript animations. The website displays personal information, the mDL solution details, and interactive icons leading to app screenshot pages.

## Features

- **Home Page:**
  - Displays full name, bio, LinkedIn, and GitHub links.
  - Showcases a Mobile Driving License Solution based on ISO 18013-5.
  - Smooth scroll animations to reveal solution details.
  - Interactive icons (`app_holder_logo.png` and `app_verify_logo.png`) navigate to dedicated pages for app screenshots.

- **Technical Stack:**
  - **Frontend:** React with Vite for fast development.
  - **Animations:** Native CSS and JavaScript animations.
  - **Design:** Elegant dark theme.

- **Underlying Technologies:**
  - Developed with Flutter for the app interface.
  - Uses Riverpod for state management.
  - Go (Golang) for backend services.
  - Python for face recognition.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mDL-Showcase.git
   cd mDL-Showcase

2. **Install dependencies:**

Using npm:


npm install

Or using Yarn:

yarn

2. **Running the Project:**

Start the development server:

Using npm:

npm run dev

Or using Yarn:


yarn dev

The website will be available at http://localhost:3000.

3. **Project Structure:**

src/: Contains the main application source code.

components/: Reusable React components.

pages/: Page components such as Home, App Showcase, etc.

assets/: Images, icons (e.g., app_holder_logo.png and app_verify_logo.png).

public/: Public assets and the main HTML file.

vite.config.ts: Vite configuration file.
