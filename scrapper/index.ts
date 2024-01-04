import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import { scrapeHome } from "./home.ts";
import scrapeMovies from "./movies.ts";

const webdata = await ((await fetch("https://www.cinesunidos.com")).text());

const $ = cheerio.load(webdata);

await Promise.all([scrapeHome($), scrapeMovies($)]);
console.log("done scrapper");
