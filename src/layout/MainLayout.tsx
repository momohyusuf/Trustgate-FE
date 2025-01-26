import { Outlet, useLocation } from "react-router";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("dashboard") ? null : <Navbar />}
      <Outlet />

      {location.pathname.includes("dashboard") ? null : <Footer />}
    </>
  );
};

export default MainLayout;
