import { Outlet } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

const routes = [
];

const AdminLayout = () => {
  return (
    <div className="mt-4 pt-5">
      <Header routes={routes} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AdminLayout;
