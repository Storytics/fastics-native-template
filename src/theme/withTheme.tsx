import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./index";

const WithTheme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default WithTheme;
