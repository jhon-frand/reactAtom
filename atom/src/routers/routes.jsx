import { Routes, Route } from "react-router-dom";
import { Home, HomeA} from "../index";
export function MyRoutes() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomeA" element={<HomeA/>} />
      </Routes>   
  );
}
