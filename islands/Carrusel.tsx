import { effect, Signal, useSignal } from "@preact/signals";
import Arrow from "../components/svgs/Arrow.tsx";

const images = [
  "https://cinesunidosweb.blob.core.windows.net/slider/HO00004646.jpg",
  "https://cinesunidosweb.blob.core.windows.net/slider/HO00004791.jpg",
  "https://cinesunidosweb.blob.core.windows.net/slider/HO00004775.jpg",
  "https://placehold.co/855x422",
];

export default function Carrusel() {
  const Index = useSignal(0);

  effect(() => {
    const interval = setInterval(() => {
      const Items = images.length;
      if (Index.value === Items - 1) {
        Index.value = 0;
        return;
      }
      Index.value += 1;
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div
      id="default-carousel"
      class="relative w-full h-full group overflow-hidden"
      data-carousel="slide"
    >
      {/* <!-- Carousel wrapper --> */}
      <div class="relative  overflow-hidden  h-[170px] sm:h-[250px] md:h-[432px]">
        {/*<!--  Item -->*/}
        {images.map((image, index) => (
          <ItemC image={image} index={index} signal={Index} />
        ))}
      </div>

      <button
        type="button"
        class="absolute top-0 start-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={() => {
          if (Index.value === 0) {
            Index.value = images.length - 1;
            return;
          }
          Index.value -= 1;
        }}
      >
        <span class="">
          <Arrow class="rotate-90 w-8 text-white/50  " />
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        onClick={() => {
          const Items = Array.from(
            document.querySelectorAll("[data-carousel-item]"),
          );
          if (Index.value === Items.length - 1) {
            Index.value = 0;
            return;
          }
          Index.value += 1;
        }}
        class="absolute top-0 end-0 z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span class="">
          <Arrow class="-rotate-90 w-8 text-white/50  " />
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

function ItemC(
  { image, index, signal }: {
    image: string;
    index: number;
    signal: Signal<number>;
  },
) {
  function determinatePosition(index: number, signal: Signal<number>) {
    // determina si esta atras o depues del indice y devuelve la clase correspondiente
    if (index < signal.value) {
      return "translate-x-full";
    }
    if (index > signal.value) {
      return "-translate-x-full";
    }
    return "translate-x-0";
  }

  return (
    <div
      // if index is 0 the position is 0, but if different to 0 the position is -100%
      class={`duration-1000 transition-all ease-in-out h-full absolute top-0   ${
        determinatePosition(index, signal)
      }`}
      data-carousel-item
    >
      <img
        src={image}
        class={` block object-contain md:object-cover h-full  w-full  `}
        alt="..."
      />
    </div>
  );
}
