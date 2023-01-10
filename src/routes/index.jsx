import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Favorites from "../pages/favorites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);
