import { createBrowserRouter } from "react-router-dom";
import Layout from "../common/Layout";

import Home from "../home/views/Index";
import Product from "../product/views/Index";
import CreateProduct from "../product/views/Create";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/product",
                element: <Product />,
            },
            {
                path: "/product/create",
                element: <CreateProduct />,
            },
        ]
    }
]);

export default router;
