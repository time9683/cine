import { join } from "$std/path/join.ts";
import { exists } from "$std/fs/exists.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import sharp from "npm:sharp";

interface Movie {
  id: string;
  title: string;
  src: string;
}

export default async function scrapeMovies($: cheerio.CheerioAPI) {
  const movies: Movie[] = [];
  const MovieImages: string[] = [];
  const moviesFolder = join(Deno.cwd(), "static", "movies");
  // make a new fetch to load html in $
  const webdata =
    await ((await fetch("https://www.cinesunidos.com/home/movie?city=Valencia"))
      .text());
  const movie = $.load(webdata);

  exists(moviesFolder).then(async (exist) => {
    if (!exist) {
      await Deno.mkdir(moviesFolder);
    }
  });

  movie(".container-movies >  div >  ul > li").each((_i, el) => {
    const src = movie(el).find(".poster").attr("src");
    const title = movie(el).find("h2").text();
    const id = movie(el).find(".mod_titulo_pelicula a").attr("href")?.split(
      "=",
    ).at(-1);

    if (!src || !title || !id) return;

    movies.push({ id, title, src });
    // MovieImages.push(src);
  });

  const promises = movies.map(async (movie, i) => {
    const imgBuffer = await fetch(movie.src).then((res) => res.arrayBuffer());
    const output = join(Deno.cwd(), "static", "movies", movie.id + ".webp");
    await sharp(imgBuffer).webp({ effort: 6, quality: 75 }).toFile(output);
    console.log("done", i);
  });

  await Promise.all(promises);

  // map src to /movies/id.webp
  movies.forEach((movie) => {
    movie.src = "/movies/" + movie.id + ".webp";
  });

  const dbUrl = join(Deno.cwd(), "db", "movies.json");
  await Deno.writeTextFile(dbUrl, JSON.stringify(movies), {
    create: true,
  });
  console.log("done write movies");
}
