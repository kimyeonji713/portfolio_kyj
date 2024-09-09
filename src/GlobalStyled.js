import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const responsive = {
  xl: "1024px",
  l: "768px",
  m: "435px",
  s: "368px",
};

export const GlobalStyled = createGlobalStyle`

${reset}

*{box-sizing:border-box}

body{
    font-family: "Noto Sans KR", sans-serif;
    background-color: black;
    color: white;
}

ul,li{
    list-style: none;
}

a{
    text-decoration: none;
    color: White;
}

img{
    width: 100%;
    display: block;
}
`;
