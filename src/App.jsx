import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/Homepage";

import ErrorPage from "./components/ErrorPage";
import Root from "./components/Root";
import BoostPage from "./pages/BoostPage";
import GasPage from "./pages/GasPage";

const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Homepage />} />

      <Route path="/boost" element={<BoostPage />} />
      <Route path="/gas" element={<GasPage />} />
    </Route>
  )
);

export default App;
