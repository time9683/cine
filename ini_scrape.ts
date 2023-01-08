import cheerio from "https://esm.sh/cheerio@0.22.0";
import * as path from "https://deno.land/std@0.171.0/path/mod.ts";

const data = await (await fetch("https://www.cinesunidos.com/Inicio") ).text()

const $ = cheerio.load(data)
const sliders:string[] = [];

async function saveImage(pelicula: any,ruta:string) {
    const extension = pelicula.split(".").at(-1);
  
    console.log("feching data...");
    const responseImg = await fetch(pelicula);
    const Arrbuffer = await responseImg.arrayBuffer();
    const unite = new Uint8Array(Arrbuffer);
  
    console.log("write data...");
    // console.log(pelicula)
    const id  = pelicula.split("/").at(-1).split('.').at(0)
    const filename = `${id}.${extension}`;

    const pathfile = path.join(ruta, filename);
    console.log(pathfile)
    console.log({filename})
    await Deno.writeFile(pathfile, unite);
  
    console.log("done");
  
    return { name:id,   img: `http://192.168.0.112:8000/sliders/${filename}` };
  }



// })
// console.log(data)
$('.pelivelotopimg').each((_ig: any,valu: any)=>{


const url = $(valu).attr('src')

sliders.push(url)

})





const promisesArr  =  sliders.map((s)=>   saveImage(s,'./static/sliders/')   )
const results =  await Promise.all(promisesArr)
Deno.writeTextFile('./bd/sliders.json', JSON.stringify(results))