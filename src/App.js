import { Header, Footer } from "./components";
import {
  Home,
  SingleProduct,
  ProductList,
  Wishlist,
  Cart,
  SignIn,
  LogIn,
} from "./pages/index";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Mockman from "mockman-js";
import "./App.css";
import "./styles/index.css";
import { User } from "./context/userContext";
import { NotFoundPage } from "./pages/notFoundPage";

function App() {
  const useAuth = () => {
    const user_data = localStorage.getItem("token");
    return user_data !== null;
  };

  const PrivateRoute = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />
  };

  return (
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-list" element={<ProductList />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route
            path="/wishlist"
            element={
              <PrivateRoute>
                <Wishlist />
              </PrivateRoute>
            }
          />

          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/mock" element={<Mockman />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* {!state.userLoading ? <Footer />  : null} */}
    </div>
  );
}

export default App;
