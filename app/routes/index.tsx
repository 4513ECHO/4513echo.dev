import { createRoute } from "honox/factory";
import { LinkBox, LinkProps } from "@/components/LinkBox.tsx";
import { Sizume, Twitter } from "@/components/Icons.tsx";
import {
  SiBluesky,
  SiDiscord,
  SiGithub,
  SiGravatar,
  SiMatrix,
  SiMisskey,
  SiPypi,
  SiReddit,
  SiScrapbox,
  SiZenn,
} from "react-icons/si";

const links: LinkProps[] = [
  {
    href: "https://bsky.app/profile/4513echo.dev",
    name: "@4513echo.dev",
    icon: <SiBluesky size={24} color="#0285FF" />,
  },
  {
    href: "https://discord.com/users/807886286462517279",
    name: "響々",
    icon: <SiDiscord size={24} color="#5865F2" />,
  },
  {
    href: "https://github.com/4513ECHO",
    name: "4513ECHO",
    icon: <SiGithub size={24} color="#181717" />,
  },
  {
    href: "https://gravatar.com/4513echo",
    name: "4513echo",
    icon: <SiGravatar size={24} color="#1E8CBE" />,
  },
  {
    href: "https://matrix.to/#/@4513echo:matrix.org",
    name: "@4513echo:matrix.org",
    icon: <SiMatrix size={24} color="#000000" />,
  },
  {
    href: "https://mi.cbrx.io/@4513echo",
    name: "@4513echo@mi.cbrx.io",
    icon: <SiMisskey size={24} color="#A1CA03" />,
  },
  {
    href:
      "https://iris.to/npub145l3ecjplupjgaz7h408hj92mk3yvsfg9le4r34wlavpenjsy6aq3zwnyk",
    name: "npub145l3ecjplupjgaz7h408hj92mk3yvsfg9le4r34wlavpenjsy6aq3zwnyk",
    icon:
      "https://github.com/mbarulli/nostr-logo/raw/479913cc/SVG/nostr-icon-white-on-purple.svg",
  },
  {
    href: "https://pypi.org/user/4513echo",
    name: "4513echo",
    icon: <SiPypi size={24} color="#3775A9" />,
  },
  {
    href: "https://reddit.com/user/4513echo",
    name: "u/4513echo",
    icon: <SiReddit size={24} color="#FF4500" />,
  },
  {
    href: "https://scrapbox.io/4513echo",
    name: "/4513echo",
    icon: <SiScrapbox size={24} color="#06B632" />,
  },
  {
    href: "https://sizu.me/4513echo",
    name: "響",
    icon: <Sizume />,
  },
  {
    href: "https://twitter.com/4513echo",
    name: "@4513echo",
    icon: <Twitter />,
  },
  {
    href: "https://zenn.dev/4513echo",
    name: "響",
    icon: <SiZenn size={24} color="#3EA8FF" />,
  },
];

export default createRoute((c) => {
  return c.render(
    <div className="p-4 mx-auto max-w-screen-md text-center text-gray-100">
      <img
        alt="My icon"
        className="h-24 w-24 rounded-full m-auto"
        src="https://www.gravatar.com/avatar/1179b2be2101d818dbb543537e6c3107?s=1024"
      />
      <h1 className="text-lg font-mono p-4">4513echo.dev</h1>
      <p className="p-4">
        響です。
      </p>
      <nav>
        <ul className="mx-6 space-y-2">
          {links.map(({ href, name, icon }) => (
            <LinkBox key={name} href={href} name={name} icon={icon} />
          ))}
        </ul>
      </nav>
    </div>,
    { title: "4513echo.dev" },
  );
});
