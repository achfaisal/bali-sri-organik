import Image from "next/image";

const Card = ({ props }) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() =>
          document.getElementById(`my_modal_cert_${props.id}`).showModal()
        }
      >
        <div className="card card-compact bg-base-100 sm:w-96 w-80 shadow-md sm:hover:shadow-xl">
          <figure>
            <Image
              src={props.imageUrl}
              alt="Gambar Sertifikat"
              width={1920}
              height={1080}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
          </div>
        </div>
      </button>

      <dialog id={`my_modal_cert_${props.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <Image
            src={props.imageUrl}
            alt="Gambar Pertanian Organik"
            width={600}
            height={900}
            className="p-4 mx-auto"
          />
          <p className="py-4 text-center">{props.name}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Card;
