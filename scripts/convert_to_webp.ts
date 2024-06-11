import {
  ImageMagick,
  initialize,
  MagickFormat,
} from "https://deno.land/x/imagemagick_deno@0.0.26/mod.ts";
import { ensure, is } from "@core/unknownutil";

const [src, dist] = ensure(Deno.args, is.TupleOf([is.String, is.String]));

await initialize();

ImageMagick.read(
  await Deno.readFile(src),
  (img) =>
    img.write(
      MagickFormat.Webp,
      (data) => Deno.writeFile(dist, data),
    ),
);
