import * as cheerio from "https://esm.sh/cheerio@1.0.0-rc.12";


interface Movie {
  id: string;
  title: string;
  src: string;
  info?: {
    descripton: string;
    genre: string;
    language: string;
    format: string;
    duration: string
};
functions?: Map<string, func[]>  ;

}

// functions are a map of  day:func[]

interface func{
cinema:string;
hours:string[];
room:string;
clasification:string;


} 

const mapToObject = (map :Map<string, func[]>)  => Object.fromEntries(map.entries());



//
const getFunctionUrl =  (movideId:string,dia:string,mes:string)  => `https://www.cinesunidos.com/Home/Search/Valencia/${movideId}/${dia}/${mes}/2024/False`


export default async function getFunctionsFromMovie(id:string){
// obten el dia de hoy y 2 dias mas, y el mes
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
// make a array with the next 2 days
const days = [day, day + 1, day + 2];

// console.log(days)
const Functions = new Map();

const PromisesFetching = days.map(async (day) => {
    const response = await fetch(getFunctionUrl(id,day.toString(), month.toString()));
    const html = await response.text();
    const $ = cheerio.load(html);
    const functions : func[] = [];
    // get all the functions
    Functions.set(day, functions);
    $("li").each((i, element) => {
        const cinema = $(element).find(".ciudad").text();
        const room = $(element).find(".sala").text();
        const clasification = $(element).find(".censura").text();
        const hours : string[] = [];
        $(element).find(".hora a").each((i, element) => {
            hours.push($(element).text());
        });
        functions.push({ cinema, room, clasification, hours });
    })
})

await Promise.all(PromisesFetching);
// console.log(Functions)
return mapToObject(Functions)  ;
}


 
 