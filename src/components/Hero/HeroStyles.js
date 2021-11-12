import styled, {keyframes} from "styled-components";
import theme from "../../styles/theme";

// const boing = keyframes`
//   0%
//   {
//     transform: scale( .75 );
//   }
//   20%
//   {
//     transform: scale( 1.1 );
//   }
//   40%
//   {
//     transform: scale( .75 );
//   }
//   60%
//   {
//     transform: scale( 1.1 );
//   }
//   80%
//   {
//     transform: scale( .75 );
//   }
//   100%
//   {
//     transform: scale( .75 );
//   }
// `;

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
/* 
    .exclamation-mark{
        animation: ${boing} 1s ease infinite;
    } */

    
`;

export default StyledHero;