import { Header, Footer } from "./components";
import {
  Home,
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

function App() {
  const {state} = User()
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
        </Routes>
        {/* {!state.userLoading ? <Footer />  : null} */}
    </div>
  );
}

export default App;
