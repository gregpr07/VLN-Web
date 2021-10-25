# Videolectures.net CRA website

This is the Next.js website for our favourite video portal.
Install dependencies with `yarn`.
Run your own with `yarn dev`.

It was created with

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

## Why certain modules are needed

Only not the obvious ones!

### @brainhubeu/react-carousel

Index page horizontal scrolling.
PLan is yo use it Slides as well.

### react-intersection-observer (REMOVED FOR PERFORMANCE REASONS)

So that navbar automatically changes color when scrolling down from bottom (index page).

### react-twitter-embed

For twitter embed (just easier than script tags).

## Active problems

### DASHBOARD

- padding med naslovom in videoti, premakni clock icon v desni rob spodaj, DESKTOP: underlined buttons s kategorijami

### Lecture

- fullscreen ne dela na iOS (iPhone)
  -img scaling je gej
