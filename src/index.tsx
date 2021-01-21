import React from "react";
// Styles
import { ThemeProvider } from "styled-components/native";
import theme from "theme/index";
// Components
import Title from "components/Title";
import Description from "components/Description";
import Container from "components/Container";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Fastics Native</Title>
        <Description>Welcome</Description>
      </Container>
    </ThemeProvider>
  );
};

export default App;
