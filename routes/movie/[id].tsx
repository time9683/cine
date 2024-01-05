import { Handlers, PageProps } from "$fresh/server.ts";
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
      <main class="p-2 max-w-6xl m-auto">
        <article class="bg-white min-h-[400px]">
          <header class="bg-gradient-to-b from-red-600 to-red-800 p-2">
            <h1 class="text-lg text-white">{props.data.title}</h1>
          </header>

          <div>
            <section class="flex  p-5 gap-4">
              <img src={props.data.src} alt={props.data.title} class="w-48" />
              <p class="text-xs w-52">
                Regreso de Arthur Curry, también conocido como Aquaman (Jason
                Momoa), el heredero del reino submarino de Atlantis. Esta
                película del universo cinematográfico de DC Cómics es la secuela
                de Aquaman (2018), a partir del personaje creado por Paul Norris
                y Mort Weisinger.
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
