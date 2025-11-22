import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    font-family: ${({ theme }) => theme.fonts.body};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
    }

    h1, h2, h3, h4, h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
    }

    button {
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.body};
    }
`;