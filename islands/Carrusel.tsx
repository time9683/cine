import { Handlers, PageProps } from "$fresh/server.ts";
import { useEffect, useRef, useState } from "preact/hooks";










export default function Carrusel({sliders}){
const [image,setImage] = useState(0)
const ref = useRef()

useEffect(()=>{

setInterval(()=>{

ref.current.scroll(image*200,0)!
if(image==  sliders.length){
 return setImage(0)   
}
setImage(image+1)

},2000)



})





return ( 
<div class="snap-x overflow-x-hidden flex scroll-smooth snap-mandatory " ref={ref}>

{  sliders.map(slider => <img class="snap-center snap-always w-full" src={slider.img}/>)}


</div>)






}