import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Continents />} />
          <Route path="/:continentCode" element={<Countries />} />
          <Route
            path="/:continentId/:countryId"
            element={<CountryDetails />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
