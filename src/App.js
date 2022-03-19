import "./App.css";
import "./styles/index.css"
import { Header, Footer } from "./components"
import { Home, ProductList, Wishlist, Cart } from "./pages/index"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;
