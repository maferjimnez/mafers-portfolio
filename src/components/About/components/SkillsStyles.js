import styled from "styled-components";
import theme from "../../../styles/theme";

const SkillsContainer = styled.div`
.skills-text{
    padding: 1rem 1.5rem;
}

.skills-list{
    margin-top: 1rem; 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

    @media ${theme.mediaQueries.above1200}{
        padding: 0 1rem;
    }
}

.skills-list li {
    list-style: none;
}

.skills-list li img {
    height: 4rem;
}
.skills-list li:first-child img {
    height: 5rem;
}
.skills-list li:nth-child(2) img {
    height: 5rem;
}

`;

export default SkillsContainer;