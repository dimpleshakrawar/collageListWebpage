import { createBrowserRouter } from "react-router-dom";
import CollageInfoPage from "../pages/CollageInfoPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CollageInfoPage />,
    errorElement: <p>Oops! error occured</p>,
  },
]);
