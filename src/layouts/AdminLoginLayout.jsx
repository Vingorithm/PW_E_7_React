import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";

const routes = [];

const AdminLoginLayout = () => {
  return (
    <div>
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLoginLayout;
