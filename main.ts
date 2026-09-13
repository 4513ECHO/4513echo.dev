import { App, staticFiles } from "fresh";
import { define, type State } from "./utils.ts";

export const app = new App<State>();

app.use(staticFiles());

const loggerMiddleware = define.middleware(async (ctx) => {
  const { method, url } = ctx.req;
  const path = url.slice(url.indexOf("/", 8));
  console.log(`${method} ${path}`);
  return await ctx.next();
});
app.use(loggerMiddleware);

// Include file-system based routes here
app.fsRoutes();
