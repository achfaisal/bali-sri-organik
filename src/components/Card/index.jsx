import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      {/* <button onClick={() => document.getElementById("my_modal_4").showModal()}> */}
      <button
        onClick={() =>
          document.getElementById(`my_modal_cert_${data.id}`).showModal()
        }
      >
        <div className="card card-compact bg-base-100 w-96 shadow-md hover:shadow-xl">
          <figure>
            <Image
              src={data.imageUrl}
              alt="Gambar Pertanian Organik"
              width={1920}
              height={1080}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
          </div>
        </div>
      </button>

      {/* <dialog id={`my_modal_cert_${data.id}`} className="modal">
        <div className="modal-box w-full max-w-5xl max-h-[56rem] relative">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost sticky top-2 right-2 z-10">
              ✕
            </button>
          </form>

          <div className="flex items-center align-middle justify-center overflow-auto h-full">
            <Image
              src={data.imageUrl}
              alt="Gambar Pertanian Organik"
              width={700}
              height={1000}
              className="p-4"
            />
          </div>

          <h3 className="font-bold text-lg">{data.name}</h3>
        </div>
      </dialog> */}

      <dialog id={`my_modal_cert_${data.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <Image
            src={data.imageUrl}
            alt="Gambar Pertanian Organik"
            width={600}
            height={900}
            className="p-4 mx-auto"
          />
          <p className="py-4 text-center">{data.name}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Card;
