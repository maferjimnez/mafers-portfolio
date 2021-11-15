import styled from "styled-components";
import theme from "../../../styles/theme";

const StyledProject = styled.div`
padding: 0.5rem;
border-radius: 5px;
margin-bottom: 1.5rem;
@media ${theme.mediaQueries.above1024}{
        width: 48%;
        padding: 2.5rem;

        :hover{
            padding: 1.5rem;
        }
    }

.project-container{
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 8px -1px rgb(95 95 95);
}

.project-info{
    opacity: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;

    @media ${theme.mediaQueries.above768}{
        padding: 20px;
    }
}

.project-info:hover{
    opacity: 100%;
}


.project-img img {
    width: -webkit-fill-available;
}

.project-specifics{
    margin-top: 5px;
    display: flex;
    flex-direction: column;
}

.project-name h3{
    @media ${theme.mediaQueries.above768}{
        font-size: 25px;
    }
}

.project-specifics a, .project-specifics p{
    font-size: 12px;
    margin-top: 2px;

    @media ${theme.mediaQueries.above768}{
        font-size: 15px;
    }
}

`;

export default StyledProject;