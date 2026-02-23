# My Portfolio Website

This is a Next.js portfolio website.

## Prerequisites

*   Node.js and npm (or yarn)
*   A code editor like Visual Studio Code

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Customizing the Content

To make this portfolio your own, you'll need to update the content in the following files:

*   **`src/lib/data.ts`**: This file contains the data for your portfolio, such as your skills, experience, and projects. Update the data in this file to reflect your own information.

*   **`src/components/about.tsx`**: This component displays the "About Me" section. You can edit the text in this file to tell your story.

*   **`src/components/contact.tsx`**: This component may contain your contact information. Update it so people can get in touch with you.

*   **`src/components/hero.tsx`**: This is the first thing visitors see. Customize the hero section to make a great first impression.

*   **`src/components/projects.tsx`**: This section showcases your work. Update the project details and images here.

*   **`public/` directory**: Replace the images in this directory with your own project screenshots and profile picture. Make sure to update the image paths in the components if you change the filenames.

## Available Scripts

In the project directory, you can run:

*   `npm run dev`: Runs the app in the development mode.
*   `npm run build`: Builds the app for production to the `.next` folder.
*   `npm run start`: Starts the production server.
*   `npm run lint`: Lints the code.
*   `npm run typecheck`: Checks for TypeScript errors.
