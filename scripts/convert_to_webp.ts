import {
  ImageMagick,
  IMagickImage,
  initializeImageMagick,
  MagickFormat,
} from "https://deno.land/x/imagemagick_deno@0.0.19/mod.ts";

if (Deno.args.length !== 2) {
  console.log("convert_to_webp <image> <target>");
  Deno.exit(1);
}

await initializeImageMagick();

ImageMagick.read(
  await Deno.readFile(Deno.args[0]),
  (img: IMagickImage) =>
    img.write(
      (data: Uint8Array) => Deno.writeFile(Deno.args[1], data),
      MagickFormat.Webp,
    ),
);
