import styled from "styled-components";
import theme from "../../styles/theme";

const StyledProjects = styled.section`
    padding: ${theme.paddings.sectionMobile};
    background: ${theme.colors.primaryBackground};

    .projects-container{
        margin-top: 2rem;
        @media ${theme.mediaQueries.above1024}{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
        }
    }

    .project-wrapper:last-child{
        margin-bottom: 0;
    }

    
`;

export default StyledProjects;