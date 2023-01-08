export default function BtnLink({image,text}:{image:string,text:string}){





return (
    <li class="  group bg-gradient-to-b  from-[#c02328] justify-items-center    border-1  via-[#c02328]  to-[#890406] p-[9px] text-center place-content-center grid  w-1/3 lg:w-[300px]  min-h-[115px]  max-h-[150px] overflow-hidden  aspect-video md:aspect-auto  lg:pb-8 lg:pt-8   transition-all hover:shadow-[0px_0px_20px_1px_#000]   hover:z-10 hover:cursor-pointer ">
            <img  class="group-hover:border-white group-hover:border-2 rounded-full  p-1  transition-all  group-hover:translate-y-3 group-hover:shadow-[0px_0px_6px]"  src={image} alt="" />
             <p class="transition-all group-hover:translate-y-2 group-hover:[text-shadow:_0px_0px_10px]  ">{text}</p> </li>
)





}