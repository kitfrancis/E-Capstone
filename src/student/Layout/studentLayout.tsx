
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}