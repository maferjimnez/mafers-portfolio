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

h1{
	font-size: 2.5rem;
}

h2{
	font-size: 2rem;
}

h3{
	font-size: 1.5rem;
}

@media ${theme.mediaQueries.above1024}{
	h1{
	font-size: 4.3rem;
}

h2{
	font-size: 3rem;
}

}

span {
	color: ${theme.colors.textDetails};
}

a {
	text-decoration: none;
}

img{
	height: auto;
	width: auto;
}
`;

export default GlobalStyle;
