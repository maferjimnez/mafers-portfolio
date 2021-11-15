import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const bounce = keyframes`
    0% {transform: translateY(0);}
    20% {transform: translateY(0);}
    50% {transform: translateY(0);}
    80% {transform: translateY(0);}
    100% {transform: translateY(0);} 
    40% {transform: translateY(-30px);} 
    60% {transform: translateY(-15px);} 
`;

const spin = keyframes`
    0%{transform: rotateY(120deg);}
    15% {transform: rotateY(105deg);}
    30% {transform: rotateY(90deg);}
    45% {transform: rotateY(75deg);}
    60% {transform: rotateY(60deg);}
    75% {transform: rotateY(45deg);}
    90% {transform: rotateY(30deg);}
    100% {transform: rotateY(0);} 
`;

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
        animation: ${spin} 1s ease-in-out;

        @media ${theme.mediaQueries.above600} {
            max-width: 25rem;
        }
    }

    .hero-img-wrapper img {
        width: 100%;
    }

    .exclamation-mark{
        display: inline-block;
        animation: ${bounce} 2s 1;
    }
`;

export default StyledHero;