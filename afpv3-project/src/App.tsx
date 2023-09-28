import MobNavbar from "./components/MobNavbar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import FlashSale from "./components/FlashSale";
import { CartContextProvider } from "./context/cartContext";
import { useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContextProvider>
      <main>
        <Navbar setShowCart={setShowCart}/>
        <MobNavbar setShowCart={setShowCart}/>
        <Hero />
        <Category />
        <FlashSale />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart}/>}
        <Footer />
      </main>
    </CartContextProvider>
  );
};

export default App;
