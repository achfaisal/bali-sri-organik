import Image from "next/image";

const CardWithoutBody = ({ props }) => {
  return (
    <div className="text-black">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() =>
          document.getElementById(`my_modal_img_${props.id}`).showModal()
        }
      >
        <div className="card card-compact bg-base-100 sm:w-96 w-80 shadow-md sm:hover:shadow-xl">
          <figure>
            <Image
              src={props.imageUrl}
              alt="Gambar Sertifikat"
              width={1920}
              height={1080}
              className="rounded-lg"
            />
          </figure>
        </div>
      </button>

      <dialog id={`my_modal_img_${props.id}`} className="modal">
        <div className="modal-box w-11/12 max-w-4xl relative overflow-hidden">
          {/* Ensure overflow is hidden */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost fixed right-0 top-1 z-10">
              ✕
            </button>
          </form>
          <div className="overflow-y-auto max-h-[80vh]">
            {/* Make the content scrollable */}
            <Image
              src={props.imageUrl}
              alt="Gambar Pertanian Organik"
              width={1000}
              height={1000}
              className="p-4 mx-auto"
            />
            <p className="py-4 text-center">{props.name}</p>
            <div className="modal-action"></div>
          </div>
        </div>

        {/* <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form> */}
      </dialog>
    </div>
  );
};

export default CardWithoutBody;
