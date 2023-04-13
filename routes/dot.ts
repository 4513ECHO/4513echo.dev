import type { HandlerContext } from "$fresh/server.ts";
import { Status } from "$std/http/http_status.ts";

export function handler(_req: Request, _ctx: HandlerContext): Response {
  const location =
    "https://raw.githubusercontent.com/4513ECHO/dotfiles/main/up";
  return Response.redirect(location, Status.MovedPermanently);
}
