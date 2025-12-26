import ProductList from "./components/ProductList";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header />
      <div className="min-hscreen bg-gray-100">
        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>

        <ProductList />
      </div>
    </>
  );
};

export default App;
