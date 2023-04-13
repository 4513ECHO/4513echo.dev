import Toggle from "@/islands/Toggle.tsx";
import { Link } from "@/components/Link.tsx";
import * as Icons from "@/components/Icons.tsx";

export default function Home() {
  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Toggle />

      <nav>
        <Link
          href="https://staging.bsky.app/profile/4513echo.dev"
          name="@4513echo.dev"
          icon={<Icons.ATProtocol />}
        />
        <Link
          href="https://discord.com/users/807886286462517279"
          name="響々#4911"
          icon={<Icons.Discord />}
        />
        <Link
          href="https://github.com/4513ECHO"
          name="4513ECHO"
          icon={<Icons.GitHub />}
        />
        <Link
          href="https://matrix.to/#/@4513echo:matrix.org"
          name="@4513echo:matrix.org"
          icon={<Icons.Matrix />}
        />
        <Link
          href="https://misskey.io/@4513echo"
          name="@4513echo@misskey.io"
          icon="https://raw.githubusercontent.com/misskey-dev/assets/main/icon.png"
        />
        <Link
          href="https://pypi.org/user/4513echo"
          name="4513echo"
          icon={<Icons.PyPI />}
        />
        <Link
          href="https://reddit.com/user/4513echo"
          name="u/4513echo"
          icon={<Icons.Reddit />}
        />
        <Link
          href="https://scrapbox.io/4513echo"
          name="/4513echo"
          icon="https://nota.github.io/press-kit/S-icon.svg"
        />
        <Link
          href="https://twitter.com/4513echo"
          name="@4513echo"
          icon={<Icons.Twitter />}
        />
        <Link
          href="https://zenn.dev/4513echo"
          name="響"
          icon={<Icons.Zenn />}
        />
      </nav>
    </div>
  );
}
