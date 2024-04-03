import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";

const LazyLogin = lazy(() => import("./Login"));
const LazyProfile = lazy(() => import("./Profile"));
const LazyBrowse = lazy(() => import("./Browse"));

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-screen flex justify-center items-center text-3xl font-semibold">
          Loading...
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<LazyLogin />} />
        <Route path="/profile" element={<LazyProfile />} />
        <Route path="/browse" element={<LazyBrowse />} />
      </Routes>
    </Suspense>
  );
};

const ErrorPage = () => {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="h-full w-full flex justify-center items-center ">
        <div className="text-red-600 text-4xl">404 Not Found</div>
        <div>Go to Login Page</div>
      </div>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <AppRouter />,
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
