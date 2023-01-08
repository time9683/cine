import { HandlerContext } from "$fresh/server.ts";
import jsonBD from '../../bd/peliculas.json' assert {type:"json"}


export const handler = (_req: Request, _ctx: HandlerContext): Response => 
  {
    const peliculas = [...jsonBD]

     const limit = new URL(_req.url).searchParams.get("limit");

      if( limit == null || limit == undefined ||  Number(limit) > peliculas.length){
        return new Response(JSON.stringify(peliculas),{headers: {'Content-Type': 'application/json'}})
      }


      try{
      peliculas.length = Number(limit)
      return new Response(JSON.stringify(peliculas),{headers: {'Content-Type': 'application/json'}})
      }
      catch(_e){
        console.error("el usuario a pedido un limit no soportado")
        return new  Response(JSON.stringify({menssage:"limit not souport"}),{headers: {'content-type': 'application/json'}})

      }
    


};
