import { join } from "$std/path/join.ts";
import { exists } from "$std/fs/exists.ts";
import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import sharp from "npm:sharp";

interface Movie {
  id: string;
  title: string;
  src: string;
}
const dbUrl = join(Deno.cwd(), "db", "movies.json");
const moviesFolder = join(Deno.cwd(), "static", "movies");

export default async function scrapeMovies($: cheerio.CheerioAPI) {
  const movies: Movie[] = [];
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

  // verificar si se encuntran peliculas
  if (movies.length === 0) {
    console.log("movie not found,scrapper change to background default movies");
    const dbMovies = JSON.parse(
      await Deno.readTextFile(join(Deno.cwd(), "db", "movies.json")),
    );
    for (let i = 0; i < dbMovies.length; i++) {
      const src = `https://cinesunidosweb.blob.core.windows.net/poster/${
        dbMovies[i].id
      }.jpg`;
      movies.push({ ...dbMovies[i], src });
    }
  }

  const promises = movies.map(async (movie, i) => {
    const imgBuffer = await fetch(movie.src).then((res) => res.arrayBuffer());
    const output = join(moviesFolder, movie.id + ".webp");
    await sharp(imgBuffer).webp({
      effort: 6,
      quality: 70,
    })
      .toFile(output);
    console.log("done", i);
  });

  await Promise.all(promises);

  // map src to /movies/id.webp
  movies.forEach((movie) => {
    movie.src = "/movies/" + movie.id + ".webp";
  });

  await Deno.writeTextFile(dbUrl, JSON.stringify(movies), {
    create: true,
  });
  console.log("done write movies");
}
