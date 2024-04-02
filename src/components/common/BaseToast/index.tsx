import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
import useTimeout from "hooks/useTimeout";

interface BaseToastProps {
  handleClose: Function;
  message?: string;
  autoHideDuration?: number;
  severity?: "success" | "error";
}
export const BaseToast = (props: BaseToastProps) => {
  const { handleClose, message, severity } = props;

  useTimeout(() => handleClose(), 5000);
  return (
    <Snackbar open={true} className="relative">
      <Alert
        severity={severity}
        sx={{ width: 600 }}
        iconMapping={{
          success: <CheckCircleOutline fontSize="inherit" />,
          error: <ErrorOutline fontSize="inherit" />,
        }}
        onClose={() => handleClose()}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
