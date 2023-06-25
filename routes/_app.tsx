import type { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { createUrl } from "@/scripts/gravatar.ts";

export default async function App({ Component }: AppProps) {
  const iconUrl = await createUrl("mail@4513echo.dev");
  return (
    <>
      <Head>
        <title>4513echo.dev</title>
        <meta name="description" content="響のポートフォリオです。" />
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
      <div class="bg-[#8685b1] h-screen">
        <Component />
      </div>
    </>
  );
}
