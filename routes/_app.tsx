import { define } from "../utils.ts";

export default define.page(function App({ Component, state }) {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{state.title ?? "4513echo.dev"}</title>
        <link rel="icon" href="/icon.jpeg" />
        <script
          data-goatcounter="https://4513echo.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "4513echo.dev",
              "url": "https://4513echo.dev",
              "author": { "@type": "Person", "name": "響" },
            }),
          }}
        />
      </head>
      <body class="bg-[#8685b1]">
        <Component />
      </body>
    </html>
  );
});
