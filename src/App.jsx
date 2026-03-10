/* Implement Redux Toolkit in Shopping Cart App */

import "./App.css";
import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/app-layout";
import { Provider } from "react-redux";
import store from "./store";
import SkeletonProduct from "./components/skeleton-product";

const Home = React.lazy(() => import("./pages/home"));
const Cart = React.lazy(() => import("./pages/cart"));

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<SkeletonProduct />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
