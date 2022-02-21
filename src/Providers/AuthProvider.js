import { useContext, createContext, useState, useEffect } from "react";

const AuthProviderContext = createContext();
const AuthProviderContextDispatcher = createContext();

const AuthProvider = ({ children }) => {
  const [state, setState] = useState();
  console.log("storage");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("authState")) || false;
    setState(userData);
    console.log("get");
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem("authState", data);
    console.log("set");
  }, [state]);

  return (
    <AuthProviderContext.Provider value={state}>
      <AuthProviderContextDispatcher.Provider value={setState}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthProviderContext);
export const useAuthAction = () => useContext(AuthProviderContextDispatcher);
