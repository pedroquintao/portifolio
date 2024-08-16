import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import GlobalStyle from "./themes/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  );
}

export default App;
