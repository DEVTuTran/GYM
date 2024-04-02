import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <Box>
      <Typography>404 Page not found</Typography>
      <Link to="/">Go Home</Link>
    </Box>
  );
}
