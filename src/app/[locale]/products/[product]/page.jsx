import { useTranslations } from "next-intl";

const Page = ({ params }) => {
  const t = useTranslations();
  const products = t.raw("Products");
  const decodedProduct = params.product.replace(/-/g, "");

  const filteredProduct = products.find(
    (i) => i.product.replace(/\s/g, "").toLowerCase() === decodedProduct
  );

  return (
    <div>
      {filteredProduct ? (
        <div className="container mx-auto px-4">
          <h1>{filteredProduct.product}</h1>
          <p>{filteredProduct.description}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Page;
