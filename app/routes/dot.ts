import { createRoute } from "honox/factory";
import { STATUS_CODE } from "@std/http/status";

export default createRoute((c) => {
  const rev = c.req.query("rev") || "main";
  const location =
    `https://raw.githubusercontent.com/4513ECHO/dotfiles/${rev}/up`;
  return Response.redirect(location, STATUS_CODE.TemporaryRedirect);
});
