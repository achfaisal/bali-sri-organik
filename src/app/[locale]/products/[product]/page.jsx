import { useTranslations } from "next-intl";

const Page = ({ params }) => {
  const t = useTranslations();
  const products = t.raw("Products");
  const decodedProduct = params.product.replace(/-/g, "");

  // Assuming params contain the product name (e.g., 'Beras Merah')
  const filteredProduct = products.find(
    (i) => i.product.replace(/\s/g, "").toLowerCase() === decodedProduct
  );
  // console.log(filteredProduct);

  return (
    <div>
      {filteredProduct ? (
        <div>
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
