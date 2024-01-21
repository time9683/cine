
interface CardEsProps {
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


export default function CardEs({image, title, description, day,month,gender,country,format,duration}: CardEsProps){



return (

<article class="w-full bg-white flex flex-col md:flex-row">

<img src={image} width="250" height="360" class="mx-auto max-w-[250px] max-h-full"  alt={`image of movie ${title}`} />


<div class="flex flex-col">
   
<p class="text-center  shadow-[inset_0_0_10px_rgba(0,_0,_0,_0.5)]  text-sm p-1   ">{month}</p>
<p class="text-center bg-red-700 text-white p-1">{day}</p>

<ul>
    <li class="border-b border-red-500 border-dotted">{gender}</li>
    <li class="border-b border-red-500 border-dotted">{country}</li>
    <li class="border-b border-red-500 border-dotted">{format}</li>
    <li class="border-b border-red-500 border-dotted">{duration}</li>
</ul>

<h2 class="mt-1 text-xl p-1">{title}</h2>

<p class=" text-xs p-1 text-pretty text-zinc-700">{description}</p>



</div>






</article>


)



}