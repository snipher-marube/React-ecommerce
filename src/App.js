/** @format */

import { useEffect } from "react";
import { Button, Container, ThemeProvider } from "@mui/material";
import theme from "./styles/theme";
import Appbar from "./components/appbar";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  });
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#fff",
        }}
      >
      <Appbar/>
        {
          /**
          Appbar
          banner
          promotions
          products
          title
          footer
          searchbox
          appdrawer
           */
        }
        <h1>React Material UI</h1>
        <Button variant="contained">Button</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
