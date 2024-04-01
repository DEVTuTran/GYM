import { Box, Button, Typography, styled } from "@mui/material";

type FLexBoxProps = {
  justifyContent?: string;
  columnDirection?: boolean | string;
  alignItems?: string;
  widthcontainer?: string | number;
};

export const BodyContainer = styled(Box)(() => ({
  maxWidth: 1920,
  width: "100%",
  margin: "0 auto",
  paddingBottom: "50px",
}));

export const FLexBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "columnDirection",
})<FLexBoxProps>(
  ({
    justifyContent = "flex-start",
    columnDirection = false,
    alignItems = "center",
    widthcontainer = "100%",
  }) => ({
    width: widthcontainer,
    display: "flex",
    alignItems: alignItems,
    justifyContent: justifyContent,
    boxSizing: "border-box",
    flexDirection: columnDirection ? "column" : "row",
  })
);

export const StyledButtonGrey = styled(Button)(
  ({ theme, variant }) =>
    variant === "contained" && {
      background: theme.palette.grey[300],
      color: theme.palette.text.primary,
      "&:hover": {
        background: theme.palette.grey[400],
      },
    }
);

export const StyledButtonWarning = styled(Button)(
  ({ theme, variant }) =>
    variant === "contained" && {
      background: theme.palette.warning.main,
      color: theme.palette.warning.contrastText,
      "&:hover": {
        background: theme.palette.warning.dark,
      },
      "&:disabled": {
        color: theme.palette.action.disabled,
        ".MuiButton-startIcon": {
          color: "#fff",
        },
      },
    }
);

export const StyledButtonError = styled(Button)(
  ({ theme, variant }) =>
    variant === "contained" && {
      background: theme.palette.error.main,
      color: theme.palette.error.contrastText,
      "&:hover": {
        background: theme.palette.error.dark,
      },
      "&:disabled": {
        color: theme.palette.action.disabled,
        ".MuiButton-startIcon": {
          color: "#fff",
        },
      },
    }
);

export const StyledButtonInfo = styled(Button)(
  ({ theme, variant }) =>
    variant === "contained" && {
      background: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        background: theme.palette.info.dark,
      },
      "&:disabled": {
        color: theme.palette.action.disabled,
        ".MuiButton-startIcon": {
          color: "#fff",
        },
      },
    }
);

export const StyleLable = styled(Typography)(() => ({
  overflow: "unset",
  marginRight: 12,
}));

export const StyleTitle = styled(Typography)(() => ({
  fontSize: 22,
  paddingBottom: 10,
  borderBottom: "0.5px solid",
}));

export const StyledButtonCancel = styled(Button)(
  ({ theme, variant = "outlined" }) =>
    variant === "outlined" && {
      background: theme.palette.background.paper,
      color: theme.palette.text.secondary,
      border: "1px solid",
      borderColor: theme.palette.text.secondary,
      borderRadius: 5,
      "&:hover": {
        background: theme.palette.info.dark,
      },
      "&:disabled": {
        color: theme.palette.action.disabled,
        ".MuiButton-startIcon": {
          color: "#fff",
        },
      },
    }
);

export const StyledButtonSubmit = styled(Button)(
  ({ theme, variant = "outlined" }) =>
    variant === "outlined" && {
      background: theme.palette.info.main,
      color: theme.palette.info.contrastText,
      "&:hover": {
        background: theme.palette.info.dark,
      },
      "&:disabled": {
        color: theme.palette.action.disabled,
        ".MuiButton-startIcon": {
          color: "#fff",
        },
      },
    }
);
