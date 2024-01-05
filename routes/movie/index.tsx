import { Head } from "$fresh/runtime.ts";
import movies from "../../db/movies.json" with { type: "json" };
export default function Movies() {
  return (
    <>
      <Head>
        <title>Cines Unidos</title>
      </Head>

      <main class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-4 gap-8">
        {movies.map((movie) => (
          <article class="flex overflow-hidden relative flex-col  items-center border-2 border-zinc-500/90 group hover:border-zinc-400 transition-colors">
            <img
              class=""
              src={movie.src}
              alt={movie.title}
            />
            <a
              href={`/movie/${movie.id}`}
              class=" h-full text-center z-10 bg-slate-200 w-full p-2 font-semibold text-sm text-black/80 group-hover:text-black group-hover:bg-slate-100 transition-colors duration-200"
            >
              {movie.title}
            </a>
            <div class="bg-black inset-0 translate-x-full p-4 group-hover:translate-x-0 absolute transition-all duration-500">
              <ul class="bg-white p-2  h-[80%] xl:h-[90%]">
                <li class="text-red-500 border-b p-1 hover:cursor-pointer hover:text-red-400 transition-colors">
                  sambil
                </li>
                <li class="text-red-500  p-1 border-b hover:cursor-pointer hover:text-red-400 transition-colors">
                  metropolis
                </li>
              </ul>
            </div>
          </article>
        ))}
      </main>
    </>
  );
}
