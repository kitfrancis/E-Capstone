import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";

export default function studentLayout() {
  return (
    <div>
      <Navbar />
      
      <div className="p-4">
        <Outlet /> 
      </div>
    </div>
  );
}
