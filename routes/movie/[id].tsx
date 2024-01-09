import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import movies from "../../db/movies.json" with { type: "json" };

interface movie {
  id: string;
  title: string;
  src: string;
  info?: {
    descripton: string;
    genre: string;
    language: string;
    format: string;
    duration: string;
  };
}

export const handler: Handlers<movie> = {
  GET(_req, ctx) {
    const movie = movies.find((movie) => movie.id === ctx.params.id);
    if (!movie) {
      return ctx.renderNotFound();
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
            <section class="p-5   border-b lg:border-b-0  lg:border-r border-zinc-400 ">
             <div class=" flex flex-col md:flex-row items-center gap-4">
             <img src={props.data.src} alt={props.data.title} class="w-48" />
              <p class="text-xs lg:w-52 md:self-start text-pretty p-2">
                {props.data.info?.descripton}
              </p>


             </div>
           

           
                <ul class="flex gap-2 mt-2 bg-red-800 text-white p-1 text-sm">
                  <li class="after:content-['-'] after:ml-2 ml-4">{props.data.info?.genre}</li>
                  <li class="after:content-['-'] after:ml-2">{props.data.info?.language}</li>
                  <li class="after:content-['-'] after:ml-2">{props.data.info?.format}</li>
                  <li>{props.data.info?.duration}</li>
                </ul>
             
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
