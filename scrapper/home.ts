import { join } from "$std/path/join.ts";
import { exists } from "$std/fs/exists.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import sharp from "npm:sharp";

export async function scrapeHome($: cheerio.CheerioAPI) {
  const banners: string[] = [];
  // check if banners folder exist
  const bannersFolder = join(Deno.cwd(), "static", "banners");
  exists(bannersFolder).then((exist) => {
    if (!exist) Deno.mkdirSync(bannersFolder);
  });

  // get banners  from a class "pelivelotopimg"
  $(".carousel-inner  .pelivelotopimg").each((i, el) => {
    console.log($(el).attr("src"));
    const url = $(el).attr("src");
    if (!url) return;
    const output = join(Deno.cwd(), "static", "banners", i + ".webp");
    banners.push("/banners/" + i + ".webp");

    fetch(url!)
      .then((img) => img.arrayBuffer())
      .then((imgBuffer) =>
        sharp(imgBuffer).webp({ effort: 6, quality: 75 }).toFile(
          output,
        ).then(() => console.log("done image conversion"))
      );
  });
  join;
  // save the banners in a json file ubicate in /db/banners.json
  const dbUrl = join(Deno.cwd(), "db", "banners.json");
  await Deno.writeTextFile(dbUrl, JSON.stringify(banners), {
    create: true,
  });
  console.log("done write banners");
}
