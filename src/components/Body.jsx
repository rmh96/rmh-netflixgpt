import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const LazyLogin = lazy(() => import("./Login"));
const LazyProfile = lazy(() => import("./Profile"));
const LazyBrowse = lazy(() => import("./Browse"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center text-3xl font-semibold">
            Loading...
          </div>
        }
      >
        <LazyLogin />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center text-3xl font-semibold">
            Loading...
          </div>
        }
      >
        <LazyProfile />
      </Suspense>
    ),
  },
  {
    path: "/browse",
    element: (
      <Suspense
        fallback={
          <div className="h-screen w-screen flex justify-center items-center text-3xl font-semibold">
            Loading...
          </div>
        }
      >
        <LazyBrowse />
      </Suspense>
    ),
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
