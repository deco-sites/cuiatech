import { asset, Head } from "$fresh/runtime.ts";
import { defineApp } from "$fresh/server.ts";
import { Context } from "deco/deco.ts";
import Theme from "../sections/Theme/Theme.tsx";

export default defineApp(async (_req, ctx) => {
  const revision = await Context.active().release?.revision();

  return (
    <>
      {/* Include default fonts and css vars */}
      <Theme colorScheme="any" />

      {/* Include Icons and manifest */}
      <Head>
        {/* Enable View Transitions API */}
        <meta name="view-transition" content="same-origin" />

        {/* Tailwind v3 CSS file */}
        <link
          href={asset(`/styles.css?revision=${revision}`)}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />

        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html: `
          @font-face {
            font-family: 'Futura';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(${
              asset("/fonts/futura/FuturaPTLight.otf")
            } format('opentype');
          }

          @font-face {
            font-family: 'Futura';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(${
              asset("/fonts/futura/FuturaPTBook.otf")
            }) format('opentype');
          }

          @font-face {
            font-family: 'Futura';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(${
              asset("/fonts/futura/FuturaPTMedium.otf")
            }) format('opentype');
          }

          @font-face {
            font-family: 'Futura';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(${
              asset("/fonts/futura/FuturaPTBold.otf")
            }) format('opentype');
          }

          @font-face {
            font-family: 'Futura';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(${
              asset("/fonts/futura/FuturaPTHeavy.otf")
            }) format('opentype');
          }

          @font-face {
            font-family: 'Futura';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(${
              asset("/fonts/futura/FuturaPTExtraBold.otf")
            }) format('opentype');
          }
          `,
          }}
        />
      </Head>

      {/* Rest of Preact tree */}
      <ctx.Component />
    </>
  );
});
