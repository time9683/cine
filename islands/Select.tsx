import { effect, useSignal } from "@preact/signals";
import { SelectItem } from "../components/SelectItem.tsx";
import { type Ref, useRef } from "preact/hooks";
import Arrow from "../components/svgs/Arrow.tsx";

const REGIONS = [
  "valencia",
  "caracas",
  "maracaibo",
  "barquisimeto",
  "maracay",
  "san cristobal",
];

export default function Select() {
  // create a ref to the div with the invisible class
  const Open = useSignal(false);
  const selected = useSignal("valencia");
  const divItems = useRef<HTMLDivElement>(null);

  const addEnter = () => {
    if (!divItems.current) return;
    Open.value = true;
    divItems.current.classList.remove("hidden");
    divItems.current.classList.remove("animate-exit");
    divItems.current.classList.add("animate-enter");
  };

  const addExit = () => {
    Open.value = false;
    if (!divItems.current) return;
    divItems.current.classList.add("animate-exit");
    divItems.current.classList.remove("animate-enter");
    divItems.current.parentElement?.blur();
  };

  return (
    <div
      role="select"
      tabindex={0}
      class=" focus:outline-none relative group"
      onfocusout={addExit}
      onClick={() => {
        if (!divItems.current) return;
        divItems?.current.classList.contains("hidden") ||
          divItems?.current.classList.contains("animate-exit")
          ? addEnter()
          : addExit();
      }}
    >
      <span class="hover:text-gray-100 gap-2 cursor-pointer text-3xl uppercase text-white group-focus:text-gray-100 flex items-center">
        {selected.value}
        <Arrow
          class={`w-6 h-auto transition-all time duration-500 text-white  ${
            Open.value ? "rotate-180" : ""
          }  `}
        />
      </span>
      <div
        ref={divItems}
        class={`hidden absolute p-1 bg-white w-36 right-0 top-12 border border-gray-200 z-20`}
      >
        {REGIONS.map((region) => (
          <div
            role="option"
            class=" text-lg cursor-pointer p-1  border-b w-full text-right text-red-700  border-red-700 z-30  
            hover:bg-red-700 hover:text-white
            
            "
            key={region}
            onClick={() => {
              selected.value = region;
            }}
          >
            {region}
          </div>
        ))}
      </div>
    </div>
  );
}
