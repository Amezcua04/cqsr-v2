import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./scenes/home/Home";
import Servicios from "./scenes/servicios/Servicios";
import Especialidades from "./scenes/especialidades/Especialidades";
import Salud365 from "./scenes/salud365/salud365";
import Contacto from "./scenes/contacto/Contacto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Box className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/medicos" element={<Especialidades />} />
          <Route path="/salud365" element={<Salud365 />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Box>
  );
}

export default App;
