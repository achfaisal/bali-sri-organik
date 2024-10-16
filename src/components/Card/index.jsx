import React from "react";
import Image from "next/image";

const Card = ({ data }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <button
        onClick={() =>
          document.getElementById(`my_modal_cert_${data.id}`).showModal()
        }
      >
        <div className="card card-compact bg-base-100 sm:w-96 w-80 shadow-md sm:hover:shadow-xl">
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
