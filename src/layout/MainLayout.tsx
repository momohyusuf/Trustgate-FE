import { Outlet } from "react-router";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
