import Select from "../islands/Select.tsx";
import { SelectItem } from "../components/SelectItem.tsx";
import Card from "../components/Card.tsx";
import Carrusel from "../islands/Carrusel.tsx";
import { MovieCard } from "../components/movie-card.tsx";
export default function Home() {
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

      <main class=" max-w-full sm:max-w-xl  md:max-w-3xl lg:max-w-6xl m-auto mt-2">
        <section class="flex flex-col lg:flex-row w-full">
          <div class=" flex  lg:flex-col">
            <Card
              value="películas"
              link="#"
              logo="https://www.cinesunidos.com/Content/Images/peliculas.png"
            />
            <Card
              value="Cines"
              link="#"
              logo="https://www.cinesunidos.com/Content/Images/peliculas.png"
            />
            <Card
              value="proximos estrenos"
              link="#"
              logo="https://www.cinesunidos.com/Content/Images/peliculas.png"
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

        <section class="grid grid-cols-4 mt-2">
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
    </div>
  );
}
