import Select from "../islands/Select.tsx";

export default function Header() {
  return (
    <header class="">
      <nav class="bg-zinc-800 p-3">
        <ul class=" gap-4 text-xs text-zinc-400 justify-center hidden sm:flex">
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
        <div class=" flex  flex-col sm:flex-row  justify-between p-3  max-w-full sm:max-w-xl  md:max-w-3xl lg:max-w-6xl m-auto ">
          <img src="/cine_unido.webp" alt="cines unidos logo" />
          <Select />
        </div>
      </div>
    </header>
  );
}
