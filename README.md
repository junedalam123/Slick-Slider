Carousel – React Slick 

This project is an accessible image carousel built using React, React Slick, and custom ARIA behaviors.
The primary objective was to match the accessibility patterns from the W3C ARIA Carousel Authoring Practices, including support for screen readers (NVDA) and full keyboard navigation.


Live Demo (Netlify Deployment)

Add your Netlify URL here after deployment



Project Goals

The assignment required building a carousel that:

Works with React Slick

Matches W3C ARIA Carousel Example

Supports NVDA screen reader announcements

Fully supports keyboard navigation

Provides Pause/Play control

Announces slide changes using an ARIA live region

Deploys on Netlify

Provides clean, modular React code

This repository fulfills all of those requirements.



Tech Stack

React 18+

React Slick

Slick Carousel CSS

Custom Accessibility Hooks

ARIA Live Regions

Netlify (Deployment)



Folder Structure


src/
  ├── components/
  │     └── Carousel/
  │            ├── Carousel.jsx
  │            ├── Slide.jsx
  │            └── carousel.css
  ├── hooks/
  │     └── useLiveAnnouncer.js
  ├── constants/
  │     └── slideData.js
  ├── App.js
  └── index.js



How to Run the Project Locally

Clone the repository

git clone <your-repo-url>
cd <your-project-folder>

npm install
