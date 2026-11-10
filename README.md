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

The Android buttons download `public/apk/aasai-talk.apk`. The current file
is an Android internal preview build (version 1.0.0, build 4), not a Play Store
production build.

The APK is about 213 MB. Vercel Hobby has a 100 MB static-file limit, and GitHub
blocks regular Git files above 100 MiB. Keep the binary out of regular Git
commits and confirm the hosting plan and deployment method can serve a file of
this size before publishing the updated landing page. Vercel Pro supports larger
static-file uploads; a local Vercel CLI deployment may be needed because GitHub
cannot store this APK in the repository as a regular file.

The existing web app link is configured in `src/App.jsx`.

To publish this preview APK without committing the large file:

1. In GitHub Desktop, cancel any large-file warning and exclude
   `public/apk/aasai-talk.apk` from the commit. The APK is ignored by Git.
2. Push the landing-page source files to the `antonyccspl/aasai-talk-landing`
   repository.
3. While signed in to your own `antonyccspl` GitHub account, create a
   **pre-release** at
   `https://github.com/antonyccspl/aasai-talk-landing/releases/new`.
   Label it as the Android internal preview (version 1.0.0, build 4), and
   upload the APK as `aasai-talk.apk`. Do not select "Set as the latest release".
4. After publishing, copy the APK asset link and set `APK_DOWNLOAD_URL` in
   `src/App.jsx` to that link, then commit and push the source change.
5. Connect the GitHub repository to a new Vercel project. Set the build command
   to `npm run build` and output directory to `dist`, then deploy.

The APK remains hosted as a GitHub Release asset, not as a Vercel static file.
The current download buttons stay disabled until step 4, preventing a broken
download link.

## Deploy

Import this folder as its own Vercel project and use the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`

This project is separate from the existing Expo web app, so deploying it as a
new Vercel project will not replace the current app deployment or domain.
