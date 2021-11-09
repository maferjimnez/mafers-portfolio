import styled from "styled-components";
import theme from "../../styles/theme";

const StyledHero = styled.section`
    padding: ${theme.paddings.sectionMobile};
    background: ${theme.colors.primaryBackground};

    @media ${theme.mediaQueries.above768} {
        padding: ${theme.paddings.sectionDesktop};
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .hero-text-container h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
       
        @media ${theme.mediaQueries.above600} {
		    font-size: 3.5rem;
	 }
    }

    .hero-text-container p {
        font-size: 1.5rem;
        margin-bottom: 2rem;

        @media ${theme.mediaQueries.above600} {
            width: 75%;
        }
    }

    .hero-img-wrapper {
        margin: auto;
        max-width: 25rem;
        overflow: hidden;
        display: flex;
        border-radius: 50%;
        border: dashed ${theme.colors.textDetails};
        background-color: ${theme.colors.secondaryBackground};

        @media ${theme.mediaQueries.above600} {
            max-width: 28.5rem;
        }
    }

    .hero-img-wrapper img {
        width: 100%;
    }
`;

export default StyledHero;