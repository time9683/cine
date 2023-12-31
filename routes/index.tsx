import Select from "../islands/Select.tsx";
import Card from "../components/Card.tsx";
import Carrusel from "../islands/Carrusel.tsx";
import { MovieCard } from "../components/movie-card.tsx";
import X from "../components/svgs/X.tsx";
import Youtube from "../components/svgs/Youtube.tsx";
import Facebook from "../components/svgs/Facebook.tsx";
import Instagram from "../components/svgs/Instagram.tsx";
import Apple from "../components/svgs/Apple.tsx";
import Android from "../components/svgs/Android.tsx";

import ImageDialog from "../islands/dialog-image.tsx";

import { useSignal } from "@preact/signals";
export default function Home() {
  const openDialog = useSignal(false);

  return (
    <div class="bg-black h-auto">
      <header class="">
        <nav class="bg-zinc-800 p-3">
          <ul class="flex gap-4 text-xs text-zinc-400 justify-center">
            <li>INICIO</li>
            <li>ESTRENOS</li>
            <li>PUBLICIDAD Y EVENTOS</li>
            <li>PROMOCIONES Y PRECIOS</li>
            <li>CLAVE C2P</li>
            <li>MI CUENTA</li>
            <li>CONTACTO</li>
          </ul>
        </nav>

        <div class="bg-red-700">
          <div class=" flex justify-between p-3  max-w-full sm:max-w-xl  md:max-w-3xl lg:max-w-6xl m-auto">
            <img src="/cine_unido.png" />
            <Select />
          </div>
        </div>
      </header>

      <main class=" max-w-full sm:max-w-xl  md:max-w-3xl lg:max-w-6xl m-auto mt-2 p-2">
        <section class="flex flex-col lg:flex-row w-full">
          <div class=" flex  lg:flex-col">
            <Card
              value="películas"
              link="#"
              logo="/peliculas.png"
            />
            <Card
              value="Cines"
              link="#"
              logo="/cines.png"
            />
            <Card
              value="proximos estrenos"
              link="#"
              logo="/estrenos.png"
            />
          </div>

          <Carrusel />
        </section>

        <img
          class="w-full mt-2"
          src="/PromoNavidadDorada.jpg"
          alt="promo navidad"
        />

        <div class="bg-red-700 w-full p-2 text-white text-center uppercase mt-4">
          preventas
        </div>
        <ImageDialog />
        <div class="flex mt-5 mb-5 w-full justify-center items-center ">
          <a>
            <img
              class=""
              src="/bannerpriscilla.jpg"
            />
          </a>

          <a>
            <img
              class=""
              src="/bannerpriscilla.jpg"
            />
          </a>
          <a>
            <img
              class=""
              src="/bannerpriscilla.jpg"
            />
          </a>
        </div>
        <section class="grid grid-cols-3 lg:grid-cols-4 mt-2">
          <MovieCard
            link="#"
            logo="https://cinesunidosweb.blob.core.windows.net/poster/HO00004646.jpg"
            value="los choros"
          />
          <MovieCard
            link="#"
            logo="https://cinesunidosweb.blob.core.windows.net/poster/HO00004646.jpg"
            value="los choros"
          />
          <MovieCard
            link="#"
            logo="https://cinesunidosweb.blob.core.windows.net/poster/HO00004646.jpg"
            value="los choros"
          />
          <MovieCard
            link="#"
            logo="https://cinesunidosweb.blob.core.windows.net/poster/HO00004646.jpg"
            value="los choros"
          />
        </section>
      </main>

      <footer class="w-full bg-gradient-to-b from-neutral-600 to-neutral-800 flex flex-col justify-center items-center p-4 gap-4">
        <img src="/cine_unido.png" alt="" />
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

        <p class="text-gray-400 text-xs">
          © CopyRight 2015. Todos los derechos reservados. Compañía Anónima
          Empresa Cines Unidos. RIF.:J-00012651-8
        </p>
      </footer>
    </div>
  );
}
