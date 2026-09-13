import { HttpError } from "fresh";
import { define } from "@/utils.ts";

export default define.page(function ErrorPage({ error }) {
  if (error instanceof HttpError) {
    return <h1>{error.status} - {error.message}</h1>;
  }
  return <h1>Something Went Wrong</h1>;
});
