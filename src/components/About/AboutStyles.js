import styled from "styled-components";
import theme from '../../styles/theme';

const AboutSection = styled.section`
    padding: ${theme.paddings.sectionMobile};
    padding-top: 7rem;
    background: ${theme.colors.primaryBackground};

    @media ${theme.mediaQueries.above768} {
        padding: ${theme.paddings.sectionDesktop};
        
        .bottom-wrapper{
            display: flex;
            flex-direction: column;
        }
    }

    @media ${theme.mediaQueries.above1200} {
        padding-top: 11rem;

        .about-me-tabs{
            display: flex;
            justify-content: space-around;
        }

        .bottom-wrapper{
            justify-content: space-between;
        }
    }
`;

export default AboutSection;
