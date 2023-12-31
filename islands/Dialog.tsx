import { Ref } from "preact/hooks";

interface DialogProps {
  image: string;
  refe: Ref<HTMLDialogElement>;
  onClose: () => void;
}

const Dialog: preact.FunctionalComponent<DialogProps> = (
  { onClose, image, refe },
) => {
  const handleClose = () => {
    onClose();
  };

  return (
    // if isOpen is false, the dialog is not rendered
    <dialog
      ref={refe}
      //   make a animation when the dialog is closed
      class="backdrop:bg-black/80 open:animate-enter animate-exit  transition-all     "
    >
      <div class="bg-white rounded-lg p-4 z-10">
        <button
          onClick={handleClose}
          class="absolute  transition-colors right-2 top-0 text-xl p-2 w-8 h-8  flex justify-center items-center bg-zinc-700 rounded-full text-white/80 hover:bg-zinc-600 hover:text-white "
        >
          x
        </button>
        <img src={image} alt="" />
        <button
          class="bg-red-700 w-full text-white px-4 py-2 rounded"
          onClick={handleClose}
          onBlur={handleClose}
        >
          Subtitulada
        </button>
      </div>
    </dialog>
  );
};

export default Dialog;
