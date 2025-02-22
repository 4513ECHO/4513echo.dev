import { reactRenderer } from "@hono/react-renderer";
import { Link, Script } from "honox/server";

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link
          rel="icon"
          href="https://www.gravatar.com/avatar/1179b2be2101d818dbb543537e6c3107?s=1024"
        />
        <Script src="/app/client.ts" async />
        <Link rel="stylesheet" href="/app/style.css" />
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
      <body className="bg-[#8685b1]">{children}</body>
    </html>
  );
});
