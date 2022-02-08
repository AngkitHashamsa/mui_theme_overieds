import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange, amber } from "@mui/material/colors";
import Pagination from "./Pagination";
import ButtonAppBar from "./Navbar";
const PrimaryColors = orange[500];
const amberPrimary = amber[800];
// const
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
  components: {
    // Name of the component
    MuiFab: {
      styleOverrides: {
        // Name of the slot
        primary: {
          color: "white",
          "&:hover": {
            color: PrimaryColors,
            backgroundColor: "white",
            border: `1px solid ${PrimaryColors} `,
          },
        },
      },
    },
  },
});
//  MuiFab-root
// MuiFab-circular
// MuiFab-sizeLarge
// MuiFab-primary
// css-yyo5r1-MuiButtonBase-root-MuiFab-root

export default function FloatingActionButtons() {
  return (
    <>
      <ButtonAppBar />

      <Box
        sx={{
          "& > :not(style)": { m: 1 },
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ThemeProvider theme={theme}>
          <Fab aria-label='add' size='small' color='error'>
            <AddIcon sx={{ color: "white" }} />
          </Fab>
          <Fab color='secondary' aria-label='edit' size='medium'>
            <EditIcon />
          </Fab>
          <Fab variant='extended' color='primary' size='large'>
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
          <Fab aria-label='like' size='small'>
            <FavoriteIcon />
          </Fab>
        </ThemeProvider>
        <Pagination />
      </Box>
    </>
  );
}
