import { useSignal } from "@preact/signals";

interface DaysFunProps{
    functions : {
        [key: string]: func[];
      } 
}


  
  interface func{
    cinema:string;
    hours:string[];
    room:string;
    clasification:string;
    
    
    }

    
const today = new Date();
const day = today.getDate();
const arrdays = [day,day+1,day+2]

export default function DayFuns(props:{data:{[key: string]: func[];}}){

const daySelected = useSignal(day)
// getMonth in string with intl
const month = new Intl.DateTimeFormat('es', { month: 'short' }).format(today)


const ChangeTo = (day:number) =>{
    daySelected.value = day
}

const getDay = (day:number) =>{
    const dayName = new Intl.DateTimeFormat('es', { weekday: 'short' }).format(new Date(today.getFullYear(), today.getMonth(), day));
    return dayName
}



return (
    <>
    
<ul class="absolute bg-slate-200 shadow-[inset_0_0_10px_1px_rgb(0,0,0)]  right-0 top-0 flex"> 
<li class="-rotate-90 self-center text-xs uppercase ">{month}</li>
{arrdays.map((day)=><li onClick={()=>{ChangeTo(day)}} class={`text-xs hover:bg-red-800 hover:text-white p-[0.34rem] cursor-pointer transition-colors  ${daySelected.value == day ? "bg-red-800 text-white" : ''}`}>{getDay(day)}<br/>{day}</li>   )}
</ul>


<ul class="w-full">
              {props.data[daySelected.value.toString()]?.map((fn) =>  <li class="flex justify-between p-2 items-center gap-2 border-b border-red-400/80"><span class="w-20 text-left font-semibold uppercase text-sm">{fn.cinema}</span> <div class="flex gap-2 flex-1 justify-center">{fn.hours.map((h)=><span class="border border-zinc-400 p-1 text-sm  h-fit hover:bg-red-800 hover:text-white transition-all cursor-pointer hover:scale-105 ">{h}</span>)}</div><span class="w-12 text-sm">{fn.room}</span><span class="bg-red-800 text-white px-1 h-fit">{fn.clasification}</span></li>)  }

</ul>

</>

)













}