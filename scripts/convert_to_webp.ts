import {
  ImageMagick,
  initialize,
  MagickFormat,
} from "https://deno.land/x/imagemagick_deno@0.0.26/mod.ts";

if (Deno.args.length !== 2) {
  console.log("convert_to_webp <image> <target>");
  Deno.exit(1);
}

await initialize();

ImageMagick.read(
  await Deno.readFile(Deno.args[0]),
  (img) =>
    img.write(
      MagickFormat.Webp,
      (data) => Deno.writeFile(Deno.args[1], data),
    ),
);
