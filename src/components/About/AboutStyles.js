import styled from "styled-components";
import theme from '../../styles/theme';

const AboutSection = styled.section`
    padding: ${theme.paddings.sectionMobile};
    background: ${theme.colors.primaryBackground};

    @media ${theme.mediaQueries.above768} {
        padding: ${theme.paddings.sectionDesktop};
        padding-top: 0;
        .bottom-wrapper{
            display: flex;
            justify-content: space-between;
        }

        .favorite-album-container{
            width: 45%;
        }

        .skills-container{
            width: 45%;
        }
    }

    @media ${theme.mediaQueries.above1200} {
        .about-me-tabs{
            display: flex;
            justify-content: space-around;
        }

        .about-me-container{
            width: 60%;
            height: auto;
        }

        .bottom-wrapper{
            flex-direction: column;
            justify-content: space-between;
            width: 30%;
        }

        .favorite-album-container{
            width: unset;
        }

        .skills-container{
            width: unset;
        }
    }
`;

export default AboutSection;
