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

The Android buttons download the current preview APK from the
[Aasai Talk Android 1.0.0 build 5 prerelease](https://github.com/antonyccspl/aasai-talk-landing/releases/tag/android-preview-1.0.0-build-5).
The APK is about 213 MB, so it is hosted as a GitHub Release asset rather than
committed to the repository or bundled into Vercel. The matching local copy in
`public/apk/aasai-talk.apk` is intentionally ignored by Git.

To publish a replacement build, upload it as `aasai-talk.apk` to a new GitHub
Release and update `APK_DOWNLOAD_URL` in `src/App.jsx`. Label preview builds as
prereleases and do not mark them as the latest production release.

The existing web app link is configured in `src/App.jsx`.

To publish this preview APK without committing the large file:

The current prerelease and asset are published under the
`antonyccspl` account. The landing-page download buttons point directly to the
public APK asset.

## Deploy

Import this folder as its own Vercel project and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

This project is separate from the existing Expo web app, so deploying it as a
new Vercel project will not replace the current app deployment or domain.
