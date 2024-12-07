import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import MainLayout from "../layouts/MainLayout.jsx";
import HomePage from "../pages/auth/user/HomePage.jsx";
import LoginUser from "../pages/auth/user/LoginUser";
// import Profile from "../pages/Profile";
// import Payment from "../pages/Payment";
// import Upcoming from "../pages/Upcoming";
// import ManageBid from "../pages/ManageBid";
// import Information from "../pages/Information";
// import Catalog from "../pages/Catalog";
// import CarDetails from "../pages/CarDetails";
// import AddBid from "../pages/AddBid";

const router = createBrowserRouter([
    {
        path: "*",
        element: <div>Routes Not Found!</div>,
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            //   {
            //     path: "/login",
            //     element: <LoginUser />,
            //   },
            //   {
            //     path: "/profile",
            //     element: <Profile />,
            //   },
            //   {
            //     path: "/payment",
            //     element: <Payment />,
            //   },
            //   {
            //     path: "/upcoming",
            //     element: <Upcoming />,
            //   },
            //   {
            //     path: "/managebid",
            //     element: <ManageBid />,
            //   },
            //   {
            //     path: "/information",
            //     element: <Information />,
            //   },
            //   {
            //     path: "/catalog",
            //     element: <Catalog />,
            //   },
            //   {
            //     path: "/cardetails",
            //     element: <CarDetails />,
            //   },
            //   {
            //     path: "/addbid",
            //     element: <AddBid />,
            //   },
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
