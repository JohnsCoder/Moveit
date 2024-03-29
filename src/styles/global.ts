import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --white: #ffffff;
    --background: #F2F3f5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-hilight: #B3B9FF;
    --title: #2E384D;
    --red: #E83F5B;
    --red-dark:#ad3145;
    --green: #4CD62B;
    --blue: #5965E0;
    --blue-dark:#4953B8;
    --blue-twitter:#2AA9E0;
    --background-dark: #121212;
    --gray-dark: #2A2A2A;
}

@media(max-width: 1080px){
 html {
     font-size: 93.75%;
 }
}


@media(max-width: 720px){
 html {
     font-size: 87.5%;
 }
}

body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};

}

body, input, textarea, button {
    font: 400 1rem "inter", sans-serif;
}

button {
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}
`;
