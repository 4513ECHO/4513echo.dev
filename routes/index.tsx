import { define } from "../utils.ts";
import { LinkBox, LinkProps } from "@/components/LinkBox.tsx";
import { Twitter } from "@/components/Icons.tsx";
import {
  SiBluesky,
  SiDiscord,
  SiGithub,
  SiMatrix,
  SiMisskey,
  SiWikipedia,
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
    href: "https://twitter.com/4513echo",
    name: "@4513echo",
    icon: <Twitter />,
  },
  {
    href: "https://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:4513echo",
    name: "利用者:4513echo",
    icon: <SiWikipedia size={24} color="#000000" />,
  },
  {
    href: "https://zenn.dev/4513echo",
    name: "響",
    icon: <SiZenn size={24} color="#3EA8FF" />,
  },
];

export default define.page(function Home(_ctx) {
  return (
    <div className="p-4 mx-auto max-w-screen-md text-center text-gray-100">
      <img
        alt="My icon"
        className="h-24 w-24 rounded-full m-auto"
        src="/icon.jpeg"
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
    </div>
  );
});
