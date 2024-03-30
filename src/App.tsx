import BaseAuthLayout from "layouts/BaseAuthLayout";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "guards/ProtectedRoute";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login";
import { ENDPOINT } from "./constants/endpoint";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path={ENDPOINT.LOGIN} element={<Login />} />
      {/* <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <BaseAuthLayout>
              <Dashboard />
            </BaseAuthLayout>
          }
        />
      </Route> */}
      <Route
        path="/"
        element={
          <BaseAuthLayout>
            <Dashboard />
          </BaseAuthLayout>
        }
      />
    </Routes>
  );
}

export default App;
