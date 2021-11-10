import styled from "styled-components";
import theme from "../../../styles/theme";

const SkillsContainer = styled.div`
@media ${theme.mediaQueries.above1200}{
    max-width: 25rem;
    }


.skills-text{
    padding: 1rem 1.5rem;
}

.skills-list{
    margin-top: 1rem; 
    padding: 0 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
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