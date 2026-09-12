import { define } from "@/utils.ts";
import { STATUS_CODE } from "@std/http/status";

export const handlers = define.handlers((ctx) => {
  const rev = ctx .url.searchParams.get("rev") || "main"
  const location =
    `https://raw.githubusercontent.com/4513ECHO/dotfiles/${rev}/up`;
  return ctx.redirect(location, STATUS_CODE.TemporaryRedirect);
});
