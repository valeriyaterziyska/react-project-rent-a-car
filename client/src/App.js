import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as carService from "./services/carService";
import * as authService from "./services/authService";
import { AuthContext } from "./contexts/AuthContext";

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { AddCar } from "./components/AddCar/AddCar";
import { CarItemDetails } from "./components/CarItemDetails/CarItemDetails";

import "./App.css";

function App() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    carService.getAll().then((result) => {
      // console.log(result);
      setCars(result);
    });
  }, []);

  const onCreateCarSubmit = async (data) => {
    const newCar = await carService.create(data);

    setCars((state) => [...state, newCar]);
    navigate("/catalog");
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);
      navigate("/catalog");
    } catch (error) {
      console.log("Error auth", error);
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);
      navigate("/login");
    } catch (error) {
      console.log("Error register", error);
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({isAuthenticated: false});
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={context}>
      <div className="App">
        <header className="App-header">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/add-car"
              element={<AddCar onCreateCarSubmit={onCreateCarSubmit} />}
            />
            <Route path="/catalog" element={<Catalog cars={cars} />} />
            <Route path="/catalog/:carId" element={<CarItemDetails />} />
          </Routes>
        </header>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
