# Aasai Talk landing page

A standalone, responsive React landing page for Aasai Talk, built with Vite.
The web app is available at [aasai-talk.vercel.app](https://aasai-talk.vercel.app/).

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Android download

The Android download button is intentionally disabled until the installable APK
is added. An Android App Bundle (`.aab`) is not an APK and cannot be installed by
opening a download link on a phone.

When the APK is ready:

1. Copy it to `public/downloads/aasai-talk.apk`.
2. Set `APK_DOWNLOAD_URL` in `src/App.jsx` to
   `/downloads/aasai-talk.apk`.
3. Run `npm run build` and confirm the APK is included in `dist/downloads/`.

The existing web app link is configured in `src/App.jsx`.

## Deploy

Import this folder as its own Vercel project and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

This project is separate from the existing Expo web app, so deploying it as a
new Vercel project will not replace the current app deployment or domain.
