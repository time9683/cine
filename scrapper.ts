import  cheerio from "https://esm.sh/cheerio@0.22.0"
import * as path from "https://deno.land/std@0.171.0/path/mod.ts";
import {Buffer} from 'https://deno.land/std/io/buffer.ts'

const online = Deno.args[0] ? true : false;
// console.log(Deno.args)
// console.log(online)
// const online = false

export interface Pelicula {
name: string,
img: string
id: string


}





const peliculas : Pelicula[] = []


const data = await (await fetch("https://www.cinesunidos.com/Peliculas/Valencia")).text()
const $ = cheerio.load(data)


//  $('h2 .poster').each((_,val)=>{
// console.log($(val).text())


// })

// deno-lint-ignore no-explicit-any
$('.col-md-3 ').each((_:any,val: any)=>{


const img = $(val).find('.poster').attr('src')
 const id = $(val).find(".mod_titulo_pelicula").find('a').attr('href').split('/').at(-1)   
const name = $(val).find('h2').text()

peliculas.push({name,img,id})

}) 



async function saveImage(pelicula:Pelicula){
const extension = pelicula.img.split('.').at(-1)

console.log("feching data...")
const responseImg = await fetch(pelicula.img)
const Arrbuffer = await  responseImg.arrayBuffer()
const unite = new Uint8Array(Arrbuffer)

console.log("write data...")
const filename = `${pelicula.id}.${extension}`
const pathfile = path.join('./static/poster/',filename)
await Deno.writeFile(pathfile,unite)

console.log("done")

return  {...pelicula,img:`http://localhost:8000/poster/${filename}`}

}




if(online){
    console.log("online:",online)
const promise = peliculas.map(saveImage)
const peli =   await Promise.all(promise)
Deno.writeTextFile(`./bd/peliculas.json`,JSON.stringify(peli),{create:true})
}else{

console.log("se ha pedido que no se descagen las imagenes...")



}

