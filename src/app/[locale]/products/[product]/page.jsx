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
      <div className="breadcrumbs text-sm mt-10 mb-4">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      <div className="relative mb-10 text-white">
        <Image
          fill={true}
          src="/images/background-products.png"
          alt="Background Image"
          style={{
            objectFit: "cover",
          }}
          className="rounded-lg"
        />
        <div
          className="hero backdrop-blur-lg px-auto rounded-xl min-h-[500px] overflow-hidden"
          style={{
            background: `rgba(${[1, 1, 1, 0.5]})`,
          }}
        >
          <div className="sm:p-20 p-4 flex items-center justify-between gap-10 flex-col lg:flex-row">
            <Image
              src="/images/beras-putih.png"
              alt="Gambar Pertanian Organik"
              width={1200}
              height={400}
              className="w-[500px] h-[300px] object-cover rounded-xl"
            />
            <div>
              <h1 className="text-5xl font-bold">{filteredProduct?.product}</h1>
              <p className="py-6">{filteredProduct?.description}</p>
              <div className="collapse collapse-arrow mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium bg-slate-700 text-white">
                  Informasi Nilai Gizi
                </div>
                <div className="collapse-content backdrop-blur-md bg-slate-700/30 overflow-hidden rounded-b-lg">
                  <p className="mt-4 h-96">Hello</p>
                </div>
              </div>
              <div className="collapse collapse-arrow mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium bg-slate-700 text-white">
                  Informasi Nilai Gizi
                </div>
                <div className="collapse-content backdrop-blur-md bg-slate-700/30 overflow-hidden rounded-b-lg">
                  <p className="mt-4 h-96">Hello</p>
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
