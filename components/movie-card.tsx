interface props {
  link: string;
  logo: string;
  value: string;
}

export function MovieCard({ value, logo }: props) {
  return (
    <a
      class="hover:translate-x-2 hover:-translate-y-2 hover:opacity-95 shadow-[0px_0px_3px_1px_#585858] transition-transform"
      href="#"
    >
      <img
        width={284}
        height={407.95}
        class="object-cover"
        src={logo}
        alt={`imagen de la pelicula ${value}`}
      />
    </a>
  );
}
