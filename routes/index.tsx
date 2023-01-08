import { Head } from "$fresh/runtime.ts";
import Menu from "../islands/Menu.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Pelicula } from "../scrapper.ts";
import Carrusel from "../islands/Carrusel.tsx";
import BtnLink from "../components/linkBtn.tsx";








export const  handler:Handlers ={
  async GET(_,ctx){


try{
// const peliculas =  await (await fetch("https://time9683-cine.deno.dev/api/peliculas") ).json()
const sliders = await (await fetch("https://time9683-cine.deno.dev/api/sliders")).json()
// console.log({peliculas})
return ctx.render({peliculas:[],sliders:sliders});
}
catch (err) {
console.log(err)
return ctx.render({peliculas:[],sliders:[]})

}



}


}

export default function Home({data}:PageProps) {




  return (
    <div class="bg-black h-auto">
      <Head>
        <title>Fresh App</title>
      </Head>
     <div>

      <header class="bg-[#c02328] p-3  flex place-content-center justify-center items-center flex-col sm:flex-row sm:justify-between">
       
       <img  class="w-96" src="/logo.png" />
      
      <Menu/>
      </header>


        
        <main>
        <nav class=" lg:grid   grid-cols-[auto_auto] pr-5 pl-5  lg:pr-8 lg:pl-8 mt-2">
         
         <ul class="text-white flex flex-row lg:flex-col   place-content-center ">
              
            <BtnLink image="/peliculas.png" text="Peliculas"/>
           
           <BtnLink  image="/cines.png" text="cines" />
           <BtnLink  image="/estrenos.png" text="Proximos Estrenos" />


      </ul>
         {/* linear-gradient(to bottom, #c02328 1%,#c02328 15%,#890406 100%); */}


        {
         <Carrusel  sliders={data.sliders}  />
        }



        </nav>
          

     <div class="grid    grid-cols-2  pt-4 pb-10 pr-8 pl-8 gap-2  md:grid-cols-3 lg:grid-cols-4"> 

      {  data.peliculas.filter( (p:Pelicula) =>       !p.name.includes("3D") && !p.name.includes('(Sub)')                ).map( (p : Pelicula,index:number)=>{
            if(index > 7) return ;
        return <div class="group text-white   "  ><img  class="group-hover:scale-105 group-hover:cursor-pointer  group-hover:translate-x-3 group-hover:-translate-y-5  shadow-sm shadow-gray-200/50 transition rounded-sm" src={p.img} alt={p.name} /></div>

      })}

      
     </div>

        </main>



      </div>
    </div>
  );
}
