import {useState} from 'preact/hooks'







export default function Menu(){
    const [isOpen,setOpen] = useState(false)

return (
    <div class="flex flex-col relative self-end">
    <span   onClick={()=>{ setOpen(!isOpen  ) }}  class="text( 4xl white) hover:cursor-pointer self-end mr-10  sm:mr-1 flex justify-center items-center">
    valencia
    <img src="/chevron-down.svg" class="w-10 " ></img>
    <ul class={`absolute top-14 text(red-500 xl right) ml-10 overflow-hidden bg-white   h-0   ${ isOpen ? '!h-36 ' : ''}  transition-all  `}>
      <li class='border-b-1 border-red-500 px-5 hover:( text-white  bg-red-700  ) '  >caracas</li>
      <li class='border-b-1 border-red-500 px-5  hover:( text-white  bg-red-700  )'>valencia</li>
      <li class='border-b-1 border-red-500 px-5  hover:( text-white  bg-red-700  )'>barquisimeto</li>
      <li class='border-b-1 border-red-500 px-5 hover:( text-white  bg-red-700  )'>maracaibo</li>
      <li class='border-b-1  px-5  hover:( text-white  bg-red-700  )'>san Cristobal</li>


    </ul>
    </span>

  </div>




)

}