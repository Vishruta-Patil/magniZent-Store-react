import { createContext, useContext, useReducer } from "react";
import {userReducer} from "../reducer/user/userReducer"

const UserContext = createContext(null);
const User = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const initialValue = {
        userLoading: false,
        loginStatus: localStorage.getItem("token") !== null,
        tokenAuth: ""
    }
  const [authState, authDispatch] = useReducer(userReducer, initialValue);
  return (
    <UserContext.Provider value={{ authState, authDispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, User}
