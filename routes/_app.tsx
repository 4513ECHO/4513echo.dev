import type { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <div class="bg-[#8685b1] h-screen">
      <Component />
    </div>
  );
}
