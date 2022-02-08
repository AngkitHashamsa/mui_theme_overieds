import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange, amber } from "@mui/material/colors";
// import Pagination from "./Pagination";
// import ButtonAppBar from "./Navbar";
const PrimaryColors = orange[500];
const amberPrimary = amber[800];
let theme = createTheme({
  palette: {
    primary: {
      main: PrimaryColors,
    },
    secondary: {
      main: amberPrimary,
    },
    error: {
      main: "#dd2c00",
    },
  },
  // components: {
  //   // Name of the component
  //   MuiAppBar: {
  //     styleOverrides: {
  //       // Name of the slot
  //       colorPrimary: {
  //         backgroundColor: "#f48fb1",
  //         boxSizing: "border-box",
  //       },
  //     },
  //   },
  // },
});
export default function BasicPagination() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2}>
        <Pagination count={10} />
        <Pagination count={10} color='primary' />
        <Pagination count={10} color='secondary' />
        <Pagination count={10} disabled />
      </Stack>
    </ThemeProvider>
  );
}
