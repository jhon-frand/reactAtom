import { Routes, Route } from "react-router-dom";
import { Home, Kardex } from "../index";
import { Admin } from "../index";
import { Reportes } from "../index";
import { Settings } from "../index";

export function MyRoutes() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/kardex" element={<Kardex/>} />
        <Route path="/reportes" element={<Reportes/>} />
        <Route path="/configurar" element={<Settings/>} />

      </Routes>
    
      
  );
}

