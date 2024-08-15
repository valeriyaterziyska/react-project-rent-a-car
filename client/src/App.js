import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import * as carService from './services/carService'

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { TestDriveCatalog } from "./components/TestDriveCatalog/TestDriveCatalog";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import {AddCar} from "./components/AddCar/AddCar";

import "./App.css";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll()
      .then(result => {
        setCars(result);
      })
  }, []);

  const [auth, setAuth] = useState({});

  const onLoginSubmit = async (data) => {

    console.log('on login submit', data);
  }

  return (
    <AuthContext.Provider value={{onLoginSubmit}}>

    
    <div className="App">
      <header className="App-header">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/test-drive-catalog" element={<TestDriveCatalog />} />
        </Routes>

      </header>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
