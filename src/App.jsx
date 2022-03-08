import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ProductList } from "./components/ProductList";
import { ProductDetails } from "./components/ProductDetails";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
