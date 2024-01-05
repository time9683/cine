import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import movies from "../../db/movies.json" with { type: "json" };

interface movie {
  title: string;
  id: string;
  src: string;
}

export const handler: Handlers<movie> = {
  GET(_req, ctx) {
    const movie = movies.find((movie) => movie.id === ctx.params.id);
    if (!movie) {
      return Response.redirect("/");
    }
    return ctx.render(movie);
  },
};

export default function Movie(props: PageProps<movie>) {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://cine.deno.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.data.title} />
        <meta
          property="og:description"
          content="Web de Cines Unidos donde puedes comprar tus entradas y ver las peliculas disponibles"
        />
        <meta
          property="og:image"
          itemprop="image"
          content={`https://cine.deno.dev${props.data.src}`}
        />
        <meta property="og:updated_time" content="1440432930" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cine.deno.dev" />
        <meta property="twitter:url" content="https://cine.deno.dev/" />
        <meta name="twitter:title" content={props.data.title} />
        <meta
          name="twitter:description"
          content="Web de Cines Unidos donde puedes comprar tus entradas y ver las peliculas disponibles"
        />
        <meta
          name="twitter:image"
          content={`https://cine.deno.dev${props.data.src}`}
        />
      </Head>
      <main class="p-2 max-w-6xl m-auto">
        <article class="bg-white min-h-[400px]">
          <header class="bg-gradient-to-b from-red-600 to-red-800 p-2">
            <h1 class="text-lg text-white">{props.data.title}</h1>
          </header>

          <div class="flex gap-4 flex-col lg:flex-row p-4">
            <section class="flex  p-5 gap-4  border-b lg:border-b-0  lg:border-r border-zinc-400 ">
              <img src={props.data.src} alt={props.data.title} class="w-48" />
              <p class="text-xs w-52 text-pretty">
                Regreso de Arthur Curry, también conocido como Aquaman (Jason
                Momoa), el heredero del reino submarino de Atlantis. Esta
                película del universo cinematográfico de DC Cómics es la secuela
                de Aquaman (2018), a partir del personaje creado por Paul Norris
                y Mort Weisinger.
              </p>
            </section>

            <section class="text-center flex justify-center items-center flex-1">
              <h2 class="bg-red-600 text-white text-xl p-2 ">
                En construcion
              </h2>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
