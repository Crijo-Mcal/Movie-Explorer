import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <header className="sticky top-0 w-full h-auto z-10">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
