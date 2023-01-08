/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import {plugin} from './plugin_twind.ts'
import twindconfig from './twind.config.ts'


// activate twind - must be called at least once


// import twindPlugin from "$fresh/plugins/twind.ts";
// import twindConfig from "./twind.config.ts";

await start(manifest,{plugins:[plugin(twindconfig)]});
