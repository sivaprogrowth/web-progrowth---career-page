import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CareerPage } from "./screens/CareerPage";
import { JobDescriptionPage } from "./screens/JobDescriptionPage/JobDescriptionPage";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <CareerPage />,
  },
  {
    path: "/career-page",
    element: <CareerPage />,
  },
  {
    path: "/job-description-page",
    element: <JobDescriptionPage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
