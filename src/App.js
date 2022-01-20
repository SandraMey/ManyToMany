import Zone from './components/Zone';
import Header from './components/Header';
import Work from './components/Work';
import Deepening from './components/Deepening';
import Budget from './components/Budget';
import Level from './components/Level';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import CartContextProvider from './contexts/CartContext';
import Products from './components/cart';
import './App.css';

function App() {
  return (
    <div className="App">
    <CartContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Zone />} />
        <Route path="/work" element={<Work />} />
        <Route path="/deepening" element={<Deepening />} />
        <Route path="/level" element={<Level />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;
