import React, { useState } from "react";
import { Container, Button } from "./styles";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";

const HomePage = () => {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Button
          onClick={() =>
            setTheme(theme === lightTheme ? darkTheme : lightTheme)
          }
        >
          swap
        </Button>
        <div style={{width:"100px", height:"100px", backgroundColor:"var(--primary"}} />
      </Container>
    </ThemeProvider>
  );
};

export default HomePage;
