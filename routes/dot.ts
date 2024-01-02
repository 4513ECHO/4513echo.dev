import type { FreshContext } from "$fresh/server.ts";
import { STATUS_CODE } from "$std/http/status.ts";

export function handler(_req: Request, _ctx: FreshContext): Response {
  const location =
    "https://raw.githubusercontent.com/4513ECHO/dotfiles/main/up";
  return Response.redirect(location, STATUS_CODE.TemporaryRedirect);
}
