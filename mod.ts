import { serve } from "https://deno.land/x/sift@0.5.0/mod.ts";
import {
  Status,
  STATUS_TEXT,
} from "https://deno.land/std@0.148.0/http/http_status.ts";

serve({
  "/": () => new Response("Hello, World!"),
  "/dot": () => {
    const [status, statusText] = [
      Status.MovedPermanently,
      STATUS_TEXT[Status.MovedPermanently],
    ];
    const location =
      "https://raw.githubusercontent.com/4513ECHO/dotfiles/main/up";
    return new Response(`${status}: ${statusText}`, {
      status,
      statusText,
      headers: { location },
    });
  },
});
