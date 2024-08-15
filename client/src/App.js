import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
import * as carService from './services/carService'

import { Home } from "./components/Home/Home";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { AddCar } from "./components/AddCar/AddCar";
import { CarItemDetails } from "./components/CarItemDetails/CarItemDetails"

import "./App.css";

function App() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    carService.getAll()
      .then(result => {
        console.log(result);
        setCars(result);
      })
  }, []);

  const onCreateCarSubmit = async (data) => {
    const newCar = await carService.create(data);

    setCars(state => [...state, newCar]);
    navigate('/catalog');


  };

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
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-car" element={<AddCar  onCreateCarSubmit={onCreateCarSubmit}/>} />
          <Route path="/catalog" element={<Catalog cars={cars}/>} />
          <Route path="/catalog/:carId" element={<CarItemDetails />} />
        </Routes>

      </header>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
