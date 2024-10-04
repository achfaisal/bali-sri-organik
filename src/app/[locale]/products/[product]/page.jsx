import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const Page = ({ params }) => {
  const t = useTranslations();
  const products = t.raw("Products");
  const decodedProduct = params.product.replace(/-/g, "");

  const filteredProduct = products.find(
    (i) => i.link.replace(/-/g, "").toLowerCase() === decodedProduct
  );

  return (
    <div className="container mx-auto">
      <div className="relative my-10">
        <div
          className="hero backdrop-blur px-auto rounded-xl min-h-[500px] overflow-hidden"
          style={{
            background: `rgba(${[109, 205, 1, 0.6]})`,
          }}
        >
          <div className="sm:p-20 p-4 flex items-center justify-between gap-10 flex-col lg:flex-row">
            <Image
              src="/images/gambar-1.jpg"
              alt="Gambar Pertanian Organik"
              width={1000}
              height={600}
              className="w-full h-[300px] object-cover rounded-xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{filteredProduct.product}</h1>
              <p className="py-6">{filteredProduct.description}</p>
              <div className="collapse collapse-arrow bg-green-500 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-white">
                  Informasi Nilai Gizi
                </div>
                <div className="collapse-content bg-white">
                  <p className="mt-4 h-96">hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-green-500">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium text-white">
                  Keterangan Tanaman Padi
                </div>
                <div className="collapse-content">
                  <p>hello</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
