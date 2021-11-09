import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Mosk', sans-serif;
	color: #404040;
	transition: 0.3s ease-in;
    }
`;

export default GlobalStyle;