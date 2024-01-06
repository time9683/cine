import { type PageProps } from "$fresh/server.ts";
import { Partial } from "$fresh/runtime.ts";
export default function App({ Component }: PageProps) {
  return (
    <>
      <html lang="es">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Cines Unidos</title>
          <meta
            name="description"
            content="CinesUnidos, el cine en un click. Compra y reservación de boletos, downloads, información de películas y últimos estrenos de la cartelera cinematográfica de Venezuela."
          />
          <meta
            name="keywords"
            content="Cines Unidos, Cines Unidos Caracas, Cines Unidos Maracaibo, Cines Unidos Valencia, Cines Unidos Sambil, Cines Unidos Maturin, Cines Unidos Margarita, Cartelera de Cines Unidos,  Peliculas en cartelera,  Estrenos cines unidos, Combos Cines Unidos,  Precio Entradas Cines Unidos, Promociones Cines Unidos, Descuentos Cines Unidos, Cines Unidos Descuento estudiantil"
          />
          <link rel="shortcut icon" href="favicon.webp" type="image/x-icon" />
          <link rel="stylesheet" href="/styles.css" />
        </head>
        <body f-client-nav>
          <Partial name="body">
            <Component />
          </Partial>
        </body>
      </html>
    </>
  );
}
