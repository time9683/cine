import { Head } from "$fresh/runtime.ts";
import Menu from "../islands/Menu.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Pelicula } from "../scrapper.ts";




export const  handler:Handlers ={
  async GET(_,ctx){
const peliculas =  await (await fetch("http://localhost:8000/api/peliculas?limit=8") ).json()



return ctx.render(peliculas);


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
        <nav class="">
         
         <ul class="text(white) flex flex-row place-content-center ">
          <li class="bg-gradient-to-b  from-[#c02328] border-1     via-[#c02328]  to-[#890406] p-[9px] text-center grid  place-content-center w-1/3">
            <img  src="/peliculas.png" alt="" />
            Peliculas
            
            
            </li>
          <li class="bg-gradient-to-b  from-[#c02328]   border-1  via-[#c02328]  to-[#890406] p-[9px] text-center place-content-center grid w-1/3">
            <img src="/cines.png" alt="" />
            Cines</li>
          <li class="bg-gradient-to-b  from-[#c02328]  border-1  via-[#c02328]  to-[#890406]   text-center  grid place-content-center  p-[9px] w-1/3">
             <img src="/estrenos.png" alt="" />
            Estrenos</li>
         </ul>
         {/* linear-gradient(to bottom, #c02328 1%,#c02328 15%,#890406 100%); */}


        </nav>
          

     <div class="grid    grid-cols-2  pt-4 pb-10 pr-8 pl-8 gap-2  md:grid-cols-3 lg:grid-cols-4"> 

      {  data.map( (p : Pelicula)=>{

        return <div class="group text-white"  ><img  class="group-hover:(scale-105 cursor-pointer  translate-x-3 -translate-y-5 ) transition rounded-sm" src={p.img} alt={p.name} /></div>

      })}

      
     </div>

        </main>



      </div>
    </div>
  );
}
