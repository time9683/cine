import { useRef } from "preact/hooks";
import Dialog from "./Dialog.tsx";

export default function imageDialog() {
  const ref = useRef<HTMLDialogElement>(null);

  function close() {
    if (ref.current) {
      ref.current.close();
    }
  }

  return (
    <>
      <img
        class="mt-4 mb-4 cursor-pointer"
        onClick={() => {
          if (!ref.current) return;
          ref.current?.showModal();
        }}
        alt="El Cascanueces entradas"
        src="/banner-el-cascanueces.webp"
      />
      <Dialog
        image="/banner-el-cascanueces.webp"
        onClose={close}
        refe={ref}
      />
    </>
  );
}
