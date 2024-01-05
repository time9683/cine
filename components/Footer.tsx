import Android from "./svgs/Android.tsx";
import Apple from "./svgs/Apple.tsx";
import Facebook from "./svgs/Facebook.tsx";
import Instagram from "./svgs/Instagram.tsx";
import X from "./svgs/X.tsx";
import Youtube from "./svgs/Youtube.tsx";

export default function Footer() {
  return (
    <footer class="w-full  bg-gradient-to-b from-neutral-600 to-neutral-800 flex flex-col justify-center items-center p-4 gap-4 absolute bottom-0">
      <img src="/cine_unido.webp" alt="" />
      <nav class="flex flex-col gap-7">
        <ul class="flex gap-4 justify-between text-white/80 items-center ">
          <li>
            <X class="w-5 h-auto hover:cursor-pointer hover:text-white transition-all hover:scale-x-110" />
          </li>
          <li>
            <Instagram class="w-5  h-auto hover:cursor-pointer hover:text-white transition-all hover:scale-x-110 " />
          </li>
          <li>
            <Facebook class="w-5  h-auto hover:cursor-pointer hover:text-white transition-all hover:scale-x-110" />
          </li>
          <li>
            <Youtube class="w-5  h-auto hover:cursor-pointer hover:text-white transition-all hover:scale-x-110" />
          </li>
          <li>
            <Apple class="w-5  h-auto hover:cursor-pointer hover:text-white transition-all hover:scale-x-110" />
          </li>
          <li>
            <Android class="w-5  h-auto hover:cursor-pointer hover:text-white transition-all hover:scale-x-110" />
          </li>
        </ul>

        <ul class="uppercase text-white/80 flex gap-4 text-sm [&>*]:hover:cursor-pointer  ">
          <li class="hover:text-white">Inicio</li>
          <li class="hover:text-white">Proximos estrenos</li>
          <li class="hover:text-white">Mi cuenta</li>
        </ul>
      </nav>

      <p class="text-gray-400 text-xs text-center ">
        © CopyRight 2015. Todos los derechos reservados. Compañía Anónima
        Empresa Cines Unidos. RIF.:J-00012651-8
      </p>
    </footer>
  );
}
