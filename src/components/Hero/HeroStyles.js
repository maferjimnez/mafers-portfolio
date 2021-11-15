import styled from "styled-components";
import theme from "../../styles/theme";


const StyledHero = styled.section`
    padding: ${theme.paddings.sectionMobile};
    padding-top: 6vh;
    padding-bottom: 6vh;
    background: ${theme.colors.primaryBackground};

    @media ${theme.mediaQueries.above768} {
        padding: ${theme.paddings.sectionDesktop};
        padding-top: 25vh;
        padding-bottom: 25vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .hero-text-container h1 {
        margin-bottom: 10px;
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
        max-width: 20rem;
        overflow: hidden;
        display: flex;
        border-radius: 50%;
        border: 5px dashed ${theme.colors.textDetails};
        background-color: ${theme.colors.secondaryBackground};

        @media ${theme.mediaQueries.above600} {
            max-width: 25rem;
        }
    }

    .hero-img-wrapper img {
        width: 100%;
    }
`;

export default StyledHero;