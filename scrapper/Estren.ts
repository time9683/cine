import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";
import { join } from "$std/path/join.ts";

interface MovieEs {
    image: string;
       title: string;
       description: string;
       day: string;
   month: string;
   gender: string;
   country: string;
   format: string;
   duration: string;
}

const dbUrl  = join(Deno.cwd(), "db", "estrenos.json");

const urlEs = "https://www.cinesunidos.com/Estrenos"


export default async function getEs(){

console.log("start write estrenos")
const text = await (await fetch(urlEs)).text();
const $ = cheerio.load(text);

const movies : MovieEs[] = [];


$(".release-item").each((_i, element) => {


const image = $(element).find("img").attr("src") ?? "";
const title = $(element).find(".title-2").text();
const description = $(element).find(".release-synopsis p").text();
const month = $(element).find(".release-month").text().trim();
const day = $(element).find(".release-date").text().trim();
const listlabels : string[] = []
$(element).find("ul li").each((_i, element) => {
    listlabels.push($(element).text())
     
})

const gender = listlabels.shift()?.trim() ?? ""
const country = listlabels.shift()?.trim() ?? ""
const format = listlabels.shift()?.trim() ?? ""
const duration = listlabels.shift()?.trim() ?? ""




movies.push({ title,country,day,description,duration,format,gender,image,month})



})


await Deno.writeTextFile(dbUrl, JSON.stringify(movies), {create: true,})

console.log("done write estrenos")



}