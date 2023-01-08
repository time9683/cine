import { HandlerContext } from "$fresh/server.ts";
import jsonBD from '../../../bd/peliculas.json' assert {type:"json"}


export const handler = (_req: Request, _ctx: HandlerContext): Response => 
  {
   


    const pelicula =  jsonBD.find( (p) =>p.id ==  _ctx.params.id)
    
    return new Response(JSON.stringify(pelicula),{headers: {'Content-Type': 'application/json'}})


};
