import { createTheme, PaletteOptions } from "@mui/material";

const palette: PaletteOptions = {
  text: {
    primary: "#000000DE",
    secondary: "#00000099",
    disabled: "#00000061",
  },
  background: {
    paper: "#FFFFFF",
  },
  divider: "#0000001F",
  primary: {
    main: "#2196F3",
    dark: "#1E88E5",
    light: "#42A5F5",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#9C27B0",
    dark: "#7B1FA2",
    light: "#BA68C8",
    contrastText: "#FFFFFF",
  },
  error: {
    main: "#D32F2F",
    dark: "#C62828",
    light: "#EF5350",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#EF6C00",
    dark: "#EF6C00",
    light: "#FF9800",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#0288D1",
    dark: "#03A9F4",
    light: "#03A9F4",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#2E7D32",
    dark: "#1B5E20",
    light: "#4CAF50",
    contrastText: "#FFFFFF",
  },
};

const themes = createTheme({
  palette,
  typography: {
    h1: {
      fontSize: "40px",
      fontWeight: 500,
    },
    h4: {
      fontSize: "34px",
      lineHeight: "41px",
    },
    h5: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    subtitle1: {},
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: {
            variant: "standard",
            multiline: false,
          },
          style: {
            height: 48,
            justifyContent: "end",
            "& .MuiInputBase-readOnly": {
              color: palette.text?.secondary,
            },
          },
        },
      ],
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          "&:last-child": {
            paddingBottom: "unset",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default themes;
