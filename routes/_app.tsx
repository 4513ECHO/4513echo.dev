import type { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>4513echo.dev</title>
      </Head>
      <div class="bg-[#8685b1] h-screen">
        <Component />
      </div>
    </>
  );
}
