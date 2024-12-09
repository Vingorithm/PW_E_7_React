import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import HomePage from "../pages/auth/user/HomePage";
import LoginUser from "../pages/auth/user/LoginUser";
import Profile from "../pages/ProfilePage";
import Payment from "../pages/PaymentPage";
import Upcoming from "../pages/UpcomingPage";
import ManageBid from "../pages/auth/admin/ManageBid";
import Information from "../pages/InformationPage";
import Catalog from "../pages/CatalogPage";
import CarDetails from "../pages/DetailPage";
import AddBid from "../pages/AddBidPage";

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
    {
        // Main Layout: Halaman utama untuk user, kayak catalog, infomation, dll
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/information",
                element: <Information />,
            },
            {
                path: "/payment",
                element: <Payment />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/upcoming",
                element: <Upcoming />,
            },
            {
                path: "/catalog",
                element: <Catalog />,
            },
            {
                path: "/detail",
                element: <CarDetails />,
            },
            {
                path: "/add",
                element: <AddBid />,
            },
        ],
    },
    {
        // User Layout: Login dan halaman user lainnya
        element: <UserLayout />,
        children: [
            {
                path: "/login",
                element: <LoginUser />,
            },
        ],
    },
    {
        // Admin Layout: Halaman admin
        element: <AdminLayout />,
        children: [
            {
                path: "/admin/managebid",
                element: <ManageBid />,
            },
        ],
    },
]);

const AppRouter = () => {
    return (
        <>
            <Toaster position="top-center" richColors />
            <RouterProvider router={router} />
        </>
    );
};

export default AppRouter;
