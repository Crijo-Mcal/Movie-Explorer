import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <header className="sticky top-0 w-full h-auto z-10">
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
