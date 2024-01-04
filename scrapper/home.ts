import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import sharp from "npm:sharp";

export async function scrapeHome($: cheerio.CheerioAPI) {
  const banners: string[] = [];

  // get banners  from a class "pelivelotopimg"
  $(".carousel-inner  .pelivelotopimg").each((i, el) => {
    console.log($(el).attr("src"));
    const url = $(el).attr("src");
    if (!url) return;
    banners.push("/banners/" + i + ".webp");

    fetch(url!)
      .then((img) => img.arrayBuffer())
      .then((imgBuffer) =>
        sharp(imgBuffer).webp({ effort: 6, quality: 75 }).toFile(
          `./static/banners/${i}.webp`,
        ).then(() => console.log("done image conversion"))
      );
  });

  // save the banners in a json file ubicate in /db/banners.json
  await Deno.writeTextFile("./db/banners.json", JSON.stringify(banners), {
    create: true,
  });
  console.log("done write banners");
}
