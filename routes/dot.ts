import type { FreshContext } from "$fresh/server.ts";
import { STATUS_CODE } from "@std/http/status";

export function handler(req: Request, _ctx: FreshContext): Response {
  const rev = new URL(req.url).searchParams.get("rev") || "main";
  const location =
    `https://raw.githubusercontent.com/4513ECHO/dotfiles/${rev}/up`;
  return Response.redirect(location, STATUS_CODE.TemporaryRedirect);
}
