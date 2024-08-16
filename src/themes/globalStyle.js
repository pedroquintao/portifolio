import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.gray};
        font-family: ${({ theme }) => theme.fonts.primary};
  }
`
export default GlobalStyle;