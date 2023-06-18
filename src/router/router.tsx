import { createBrowserRouter } from "react-router-dom";
import { Root } from "./Root";
import { ErrorPage } from "./ErrorPage";
import { Counter } from "../feature/counter/Counter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <h1>Home</h1> },
      {
        path: "counter",
        element: <Counter />,
      },
    ],
  },
]);
