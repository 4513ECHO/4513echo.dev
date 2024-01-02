import type { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { iconUrl } from "@/scripts/gravatar.ts";

export default function App({ Component }: PageProps) {
  return (
    <>
      <Head>
        <title>4513echo.dev</title>
        <meta name="description" content="響のポートフォリオです。" />
        <meta name="theme-color" content="#8685b1" />
        <meta property="og:title" content="4513echo.dev" />
        <meta property="og:url" content="https://4513echo.dev" />
        <meta property="og:description" content="響のポートフォリオです。" />
        <meta property="og:image" content={iconUrl} />
        <link rel="icon" href={iconUrl} />
        <script
          data-goatcounter="https://4513echo.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        >
        </script>
      </Head>
      <body class="bg-[#8685b1]">
        <Component />
      </body>
    </>
  );
}
