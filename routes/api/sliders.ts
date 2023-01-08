import { HandlerContext } from "$fresh/server.ts";
import jsonBD from '../../bd/sliders.json' assert {type:"json"}


export const handler = (_req: Request, _ctx: HandlerContext): Response => 
  {
    const sliders = [...jsonBD]

   
    return new Response(JSON.stringify(sliders),{headers: {'Content-Type': 'application/json'}})
    


};
