import { useState, createContext } from "react";
import Products from "./components/Products";
import Product from "./components/Product";
import LoginRegister from "./components/LoginRegister";
import Nav from "./components/Nav";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./auth/Auth";

export const AppContext = createContext(null);

function App() {
  const [token, setToken] = useState(null);

  return (
    <AppContext.Provider value={{ token, setToken }}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Auth><Products /></Auth>} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<LoginRegister title="Login" />} />
          <Route
            path="/register"
            element={<LoginRegister title="Register" />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
