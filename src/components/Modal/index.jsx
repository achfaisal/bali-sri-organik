"use client";

import Image from "next/image";

const Modal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById("my_modal_4").showModal()}>
        <Image
          src="/images/visi.jpg"
          alt="Gambar Pertanian Organik"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <Image
            src="/images/visi.jpg"
            alt="Gambar Pertanian Organik"
            width={1920}
            height={1080}
          />
        </div>
      </dialog>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Modal 4</h3>
          <Image
            src="/images/visi.jpg"
            alt="Gambar Pertanian Organik"
            width={1920}
            height={1080}
          />
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
