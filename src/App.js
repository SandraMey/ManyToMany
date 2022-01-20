import "bootswatch/dist/lux/bootstrap.css";
import Zone from "./components/Zone/Zone";
import Header from "./components/Header/Header";
import Work from "./components/Work/Work";
import Deepening from "./components/Deepening/Deepening";
import Budget from "./components/Budget/Budget";
import Level from "./components/Level/Level";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import ProductsContextProvider from "./contexts/ProductsContext";
import CartContextProvider from "./contexts/CartContext";
import Store from "./components/store";
import ProductsKit from "./components/cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <CartContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Zone />} />
            <Route path="/work" element={<Work />} />
            <Route path="/deepening" element={<Deepening />} />
            <Route path="/level" element={<Level />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/products" element={<ProductsKit />} />
            <Route path="/shop" element={<Store />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
