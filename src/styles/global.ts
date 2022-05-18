import { createGlobalStyle } from "styled-components";
import { theme } from "~/styles";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
            Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: ${theme.colors.primary};
    }

    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
 
    }
 
`;
