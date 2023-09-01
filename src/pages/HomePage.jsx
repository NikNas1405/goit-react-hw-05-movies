// import { useSearchParams } from "react-router-dom";
// import { ProductList } from "../components/ProductList";
// import { SearchBox } from "../components/SearchBox";
// import { getProducts } from "../fakeAPI";

// const HomePage = () => {
//   const products = getProducts();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const productName = searchParams.get("name") ?? "";

//   const visibleProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(productName.toLowerCase())
//   );

//   return (
//     <main>
//       <ProductList products={visibleProducts} />
//     </main>
//   );
// };

const HomePage = () => {
  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
};
export default HomePage;
