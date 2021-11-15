import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import MoskFont from './fonts/Mosk.woff';
import MoskBoldFont from './fonts/Mosk-ultra-bold.woff';

const GlobalStyle = createGlobalStyle`
@font-face {
font-family: 'Mosk Semi-Bold 600';
font-style: normal;
font-weight: normal;
src: local('Mosk Semi-Bold 600'), url(${MoskFont}) format('woff');
}

@font-face {
    font-family: 'Mosk Ultra-Bold 900';
    font-style: normal;
    font-weight: normal;
    src: local('Mosk Ultra-Bold 900'), url(${MoskBoldFont}) format('woff');
    }
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Mosk Semi-Bold 600';
	font-weight: ${theme.fonts.fontWeight};
	color: ${theme.colors.primaryText};
	transition: 0.3s ease-in;
    }

h1, h2, h3, h4, h5, h6 {
	font-family: 'Mosk Ultra-Bold 900';
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
