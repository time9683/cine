import { join } from "$std/path/join.ts";
import { exists } from "$std/fs/exists.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import sharp from "npm:sharp";

export async function scrapeHome($: cheerio.CheerioAPI) {
  const imgs: string[] = [];
  const banners: string[] = [];
  // check if banners folder exist
  const bannersFolder = join(Deno.cwd(), "static", "banners");
  exists(bannersFolder).then((exist) => {
    if (!exist) Deno.mkdirSync(bannersFolder);
  });

  // get banners  from a class "pelivelotopimg"
  $(".carousel-inner  .pelivelotopimg").each((_i, el) => {
    console.log($(el).attr("src"));
    const url = $(el).attr("src");
    if (!url) return;
    imgs.push(url);
  });

  const promises = imgs.map(async (url, i) => {
    const imgBuffer = await fetch(url).then((res) => res.arrayBuffer());
    const output = join(Deno.cwd(), "static", "banners", i + ".webp");
    await sharp(imgBuffer).webp({ effort: 6, quality: 75 }).toFile(output);
    console.log("done", i);
    banners.push("/banners/" + i + ".webp");
  });

  await Promise.all(promises);

  // save the banners in a json file ubicate in /db/banners.json
  const dbUrl = join(Deno.cwd(), "db", "banners.json");
  await Deno.writeTextFile(dbUrl, JSON.stringify(banners), {
    create: true,
  });
  console.log("done write banners");
}
