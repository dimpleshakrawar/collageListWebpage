import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes";
import "./styles/globalStyles.css";
import "./styles/muiStyles.css";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
