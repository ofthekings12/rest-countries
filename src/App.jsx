import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/country/:countryCode" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
