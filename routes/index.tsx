import Card from "../components/Card.tsx";
import Carrusel from "../islands/Carrusel.tsx";
import { MovieCard } from "../components/movie-card.tsx";
import ImageDialog from "../islands/dialog-image.tsx";
import banners from "../db/banners.json" with { type: "json" };
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Cines Unidos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cine.deno.dev" />
        <meta property="og:image" content="/open.webp" />
        <meta
          property="og:description"
          content="Web de Cines Unidos donde puedes comprar tus entradas y ver las peliculas disponibles"
        />
      </Head>
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

          <Carrusel banners={banners} />
        </section>

        <img
          class="w-full mt-2"
          src="/PromoNavidadDorada.webp"
          alt="promo navidad"
        />

        <div class="bg-red-700 w-full p-2 text-white text-center uppercase mt-4">
          preventas
        </div>
        <ImageDialog />
        <div class="flex  flex-col sm:flex-row  mt-5 mb-5 w-full justify-center items-center ">
          <a href="#">
            <img
              href="#"
              class=""
              src="/bannerpriscilla.webp"
              alt="publicidad"
            />
          </a>

          <a href="#">
            <img
              class=""
              src="/bannerpriscilla.webp"
              alt="publicidad"
            />
          </a>
          <a href="#">
            <img
              class=""
              src="/bannerpriscilla.webp"
              alt="publicidad"
            />
          </a>
        </div>
        <section class="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-2">
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
    </>
  );
}
