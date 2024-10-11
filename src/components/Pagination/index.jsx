"use client";

import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations();
  const certificateData = t.raw("Certificate");

  return (
    <>
      <Swiper
        spaceBetween={0}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        slidesPerView={1}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        {certificateData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex justify-center items-center">
              <Card data={slide} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import Modal from "../Modal";

// const Pagination = ({ data }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const cardsPerPage = 4;

//   // Calculate total pages
//   const totalPages = Math.ceil(data.length / cardsPerPage);

//   // Get the current cards to display
//   const indexOfLastCard = currentPage * cardsPerPage;
//   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
//   const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

//   // Handle page change
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="container mx-auto">
//       {/* Scrollable cards on mobile and tablet, hide scrollbar on large displays */}
//       <div className="flex flex-nowrap space-x-4 overflow-x-scroll md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-hide pb-4">
//         {currentCards.map((card) => (
//           <div
//             key={card.id}
//             className="rounded-lg shadow-md min-w-[250px] md:min-w-0" // min-width for tablet scrolling
//           >
//             <div className="">
//               {/* Trigger Modal on button click */}
//               <button
//                 onClick={() =>
//                   document
//                     .getElementById(`my_modal_cert_${card.id}`)
//                     .showModal()
//                 }
//               >
//                 <Image
//                   src={card.imageUrl}
//                   alt="Gambar Pertanian Organik"
//                   width={1920}
//                   height={1080}
//                   className="rounded-tl-lg rounded-tr-lg"
//                 />
//                 <div className="p-4">
//                   <p className="font-semibold">{card.name}</p>
//                 </div>
//               </button>
//               <dialog id={`my_modal_cert_${card.id}`} className="modal">
//                 <div className="modal-box w-fit max-w-5xl">
//                   <form method="dialog">
//                     <button className="btn btn-sm btn-circle btn-ghost absolute right-1 top-1">
//                       ✕
//                     </button>
//                   </form>

//                   <Image
//                     src={card.imageUrl}
//                     alt="Gambar Pertanian Organik"
//                     width={700}
//                     height={975}
//                     className="p-2"
//                   />
//                   <h3 className="py-2">{card.name}</h3>
//                 </div>
//               </dialog>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="flex justify-center mt-6">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={`px-4 py-2 mx-1 ${
//               currentPage === index + 1
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200"
//             } rounded-lg`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       {/* Scrollbar styling */}
//       {/*  */}
//       <style jsx global>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none; /* IE and Edge */
//           scrollbar-width: none; /* Firefox */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Pagination;
