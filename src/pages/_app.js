import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@/styles/globals.scss";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Inter",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "-apple-system",
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "0px 31px",
          height: "56px",
          color: "#fff",
          borderRadius: "10px",
          textTransform: "capitalize",
          fontSize: "18px",
          fontWeight: "bold",
        },
      },
    },
  },
  shape: {
    borderRadius: 30, // defaults to 4
  },
  palette: {
    primary: { main: "#854EF2" },
  },
});

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <AppCacheProvider {...props}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
