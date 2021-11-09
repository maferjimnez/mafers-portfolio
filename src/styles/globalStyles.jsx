import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: ${theme.fonts.fontFamily};
	font-weight: ${theme.fonts.fontWeight};
	color: ${theme.colors.primaryText};
	transition: 0.3s ease-in;
    }

h1, h2, h3, h4, h5, h6 {
	font-weight: ${theme.fonts.titleWeight};
}

span {
	color: ${theme.colors.textDetails};
}
`;

export default GlobalStyle;