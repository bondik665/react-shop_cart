// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./index.css";
// import Product from "./components/product/Product";
import CartModal from "./components/cartmodal/CartModal";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Home from "./components/home/Home";
import Catalog from "./components/catalog/Catalog";

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <CartProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/About" element={<About />} />
              </Routes>

              <CartModal />
            </main>
          </CartProvider>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

// import React from "react";
// import { CartProvider } from "./context/CartContext";
// import NavMenuHeader from "./components/header/NavMenuHeader";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import "./index.css";
// import Product from "./components/product/Product";

// function App() {
//   return (
//     <>
//       <div className="wrapper">
//         <Header />
//         <main>
//           <CartProvider>
//             <NavMenuHeader />
//             <Product />
//           </CartProvider>
//           {/* <Product /> */}
//         </main>

//         <Footer />
//       </div>
//     </>
//   );
// }

// export default App;
