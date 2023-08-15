import { Link } from "@/components/Link.tsx";
import * as Icons from "@/components/Icons.tsx";
import { iconUrl } from "@/scripts/gravatar.ts";

const links = [
  {
    href: "https://bsky.app/profile/4513echo.dev",
    name: "@4513echo.dev",
    icon: <Icons.ATProtocol />,
  },
  {
    href: "https://discord.com/users/807886286462517279",
    name: "響々",
    icon: <Icons.Discord />,
  },
  {
    href: "https://github.com/4513ECHO",
    name: "4513ECHO",
    icon: <Icons.GitHub />,
  },
  {
    href: "https://matrix.to/#/@4513echo:matrix.org",
    name: "@4513echo:matrix.org",
    icon: <Icons.Matrix />,
  },
  {
    href: "https://mi.cbrx.io/@4513echo",
    name: "@4513echo@mi.cbrx.io",
    icon: "https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png",
  },
  {
    href:
      "https://iris.to/npub145l3ecjplupjgaz7h408hj92mk3yvsfg9le4r34wlavpenjsy6aq3zwnyk",
    name: "npub145l3ecjplupjgaz7h408hj92mk3yvsfg9le4r34wlavpenjsy6aq3zwnyk",
    icon:
      "https://raw.githubusercontent.com/mbarulli/nostr-logo/main/PNG/nostr-icon-purple-1024x1024.png",
  },
  {
    href: "https://pypi.org/user/4513echo",
    name: "4513echo",
    icon: <Icons.PyPI />,
  },
  {
    href: "https://reddit.com/user/4513echo",
    name: "u/4513echo",
    icon: <Icons.Reddit />,
  },
  {
    href: "https://scrapbox.io/4513echo",
    name: "/4513echo",
    icon: "https://nota.github.io/press-kit/S-icon.svg",
  },
  {
    href: "https://t2.social/4513echo",
    name: "4513echo",
    icon: "https://t2.social/_nuxt/logo.d3089d3d.svg",
  },
  {
    href: "https://twitter.com/4513echo",
    name: "@4513echo",
    icon: <Icons.Twitter />,
  },
  {
    href: "https://zenn.dev/4513echo",
    name: "響",
    icon: <Icons.Zenn />,
  },
];

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md text(center gray-100)">
      <img
        alt="My icon"
        class="h-24 w-24 rounded-full m-auto"
        src={iconUrl}
      />
      <h1 class="text-lg font-mono p-4">4513echo.dev</h1>
      <p class="p-4">
        響です。
      </p>
      <nav>
        <ul class="mx-6 space-y-2">
          {links.map(({ href, name, icon }) => (
            <Link href={href} name={name} icon={icon} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
