# Form Setup Options for ReviseWell Landing Page

## Option 1: Formspree (Recommended - Easiest)

1. Go to [formspree.io](https://formspree.io) and sign up (free tier available)
2. Create a new form
3. Copy your form endpoint URL (looks like `https://formspree.io/f/YOUR_FORM_ID`)
4. Replace `YOUR_FORM_ID` in `src/app/page.tsx` with your actual form ID
5. Deploy your site - form submissions will be sent to your email

## Option 2: Google Forms

1. Create a Google Form at [forms.google.com](https://forms.google.com)
2. Add these fields:
   - Name (Short answer)
   - Email (Short answer)
   - Role (Multiple choice: Student, Parent, Teacher, School Leader)
   - Subject (Short answer)
3. Get the form action URL from "Send" → "Get pre-filled link"
4. Update the form action in your HTML

## Option 3: Netlify Forms (If deploying to Netlify)

1. Add `netlify` attribute to your form
2. Add hidden input for Netlify
3. Deploy to Netlify - forms are automatically handled

## Option 4: EmailJS (Client-side email sending)

1. Sign up at [emailjs.com](https://emailjs.com)
2. Set up email service (Gmail, Outlook, etc.)
3. Get your service ID, template ID, and public key
4. Install: `npm install @emailjs/browser`
5. Update form to use EmailJS

## Option 5: Simple Backend (Node.js/Express)

Create a simple Express server to handle form submissions and send emails using Nodemailer.

## Current Implementation

The form is currently set up for Formspree. To activate:

1. Sign up at formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in the code with your actual form ID
4. Deploy your site

The form will collect:
- Name
- Email
- Role (Student/Parent/Teacher/School Leader)
- Subject (Exam focus)
- Timestamp (automatic)
