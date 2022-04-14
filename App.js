import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MenuBar from "./Components/MenuBar";
import NewOrders from "./Views/NewOrders";
import AllOrders from "./Views/AllOrders";
import PickUp from "./Views/PickUp";

export default function App() {
  return (
    <div className="App">
      <MenuBar /> 
      <Routes>
        <Route path="new-orders" element={<NewOrders />} />
        <Route path="all-orders" element={<AllOrders />} />
        <Route path="pickup" element={<PickUp />} />
      </Routes>
    </div>
  );
}