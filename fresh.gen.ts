// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $movie_id_ from "./routes/movie/[id].tsx";
import * as $movie_index from "./routes/movie/index.tsx";
import * as $Carrusel from "./islands/Carrusel.tsx";
import * as $DayFuns from "./islands/DayFuns.tsx";
import * as $Dialog from "./islands/Dialog.tsx";
import * as $Select from "./islands/Select.tsx";
import * as $dialog_image from "./islands/dialog-image.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/api/joke.ts": $api_joke,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
    "./routes/movie/[id].tsx": $movie_id_,
    "./routes/movie/index.tsx": $movie_index,
  },
  islands: {
    "./islands/Carrusel.tsx": $Carrusel,
    "./islands/DayFuns.tsx": $DayFuns,
    "./islands/Dialog.tsx": $Dialog,
    "./islands/Select.tsx": $Select,
    "./islands/dialog-image.tsx": $dialog_image,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
