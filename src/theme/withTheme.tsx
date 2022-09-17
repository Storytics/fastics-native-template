import * as React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "./index";

const WithTheme = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default WithTheme;
