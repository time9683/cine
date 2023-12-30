interface props {
  link: string;
  logo: string;
  value: string;
}

export default function Card({ link, logo, value }: props) {
  return (
    <a
      class="px-2 py-1 w-full lg:w-72 h-36 flex justify-center items-center flex-col  hover:shadow-[0px_0px_20px_1px_rgba(0,0,0,1)] hover:z-10   
      
     bg-gradient-to-b
     from-[#b6383d]
        via-red-700
     to-red-800
      border
      border-red-600

      transition-all
      duration-500
      group
      "
      href={link}
    >
      <img
        class="object-contain h-auto p-1  w-16 group-hover:translate-y-1  shadow-white group-hover:border group-hover:shadow-[0px_0px_5px_1px_#fff]   rounded-full border-white transition-all "
        src={logo}
        alt="imagen pelicula"
      />
      <span class="text-2xl uppercase text-white group-hover:translate-y-2  group-hover:[text-shadow:_0px_0px_10px_#fff] transition-all ">
        {value}
      </span>
    </a>
  );
}
