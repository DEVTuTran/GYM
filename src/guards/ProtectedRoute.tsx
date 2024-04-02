import { Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ENDPOINT } from "constants/endpoint";

function ProtectedRoute() {
  const { data, isLoading, isFetching } = {
    data: {},
    isFetching: false,
    isLoading: false,
  };

  const loading = isLoading || isFetching;

  if (loading) {
    return <CircularProgress />;
  }

  return data ? <Outlet /> : <Navigate to={ENDPOINT.LOGIN} replace />;
}

export default ProtectedRoute;
