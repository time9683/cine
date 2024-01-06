import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>

      <main class="grid place-content-center max-w-4xl mx-auto p-4 text-center gap-4">
        <h1 class="text-9xl font-bold text-white">404</h1>
        <img src="/this-is-fine-404.gif" class="m-auto" />

        <h2 class="text-2xl font-semibold text-white">Page not found</h2>
        <p class="text-gray-500 py-2">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <a
          href="/"
          class="px-4 py-2 bg-red-700 hover:bg-red-600 hover:text-white  text-white/80 rounded text-center"
        >
          Return Home
        </a>
      </main>
    </>
  );
}
