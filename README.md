# Vikash Rao Portfolio

A responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. It presents skills, experience, projects, a downloadable resume, and a working contact form.

## Features

- Responsive portfolio layout for desktop and mobile
- Animated hero, skills, experience, project, and contact sections
- Downloadable resume from the navigation bar
- Project thumbnails for SnapCart and Intervai
- Social-media icon links in the hero and contact sections
- Contact form that sends submissions directly to an email inbox using FormSubmit

## Tech stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- FormSubmit (contact-form delivery)

## Run locally

1. Open a terminal in this folder.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal.

To create a production build:

```bash
npm run build
```

## Contact form

The contact form is in `src/components/Contact.jsx`. It uses [FormSubmit](https://formsubmit.co/) so no backend is required.

```jsx
<form
  action="https://formsubmit.co/your-email@example.com"
  method="POST"
>
```

To use your own receiving email, replace `your-email@example.com` with your address in the form `action`.

After the first test submission, FormSubmit sends a confirmation email to the receiving address. Confirm it once; future form messages will then be delivered to that inbox. The form works locally and after deployment, as long as the visitor has an internet connection.

## Personalizing the site

- `src/pages/Home.jsx` — name, headline, introduction, and top social links
- `src/components/About.jsx` — about-me text
- `src/components/Skills.jsx` — skills and experience
- `src/components/Projects.jsx` — project names, descriptions, screenshots, and links
- `src/components/Contact.jsx` — email, phone number, social links, and FormSubmit recipient
- `src/components/Navbar.jsx` — resume download link
- `public/assets/` — images, illustrations, favicon, project screenshots, and resume PDF
- `index.html` — browser title and SEO/social metadata

## Assets

- `public/assets/resume.pdf` — downloadable resume
- `public/assets/snapcart.png` — SnapCart project thumbnail
- `public/assets/intervai.png` — Intervai project thumbnail
- `public/assets/hero-vector.svg` — hero illustration

