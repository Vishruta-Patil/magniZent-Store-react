import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context/productListContext";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import { WishlistProvider } from "./context/wishlistContext";

ReactDOM.render(

  
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </ProductProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
