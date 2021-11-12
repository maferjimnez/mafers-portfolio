import styled from "styled-components";
import theme from "../../../styles/theme";


const AboutMeContainer = styled.div`
    padding: 1rem 1.5rem;

    @media ${theme.mediaQueries.above1200}{
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    @media ${theme.mediaQueries.above768} {
        .top-container{
            display: flex;
        }
    }

    .about-me-info{
        margin-bottom: 2rem;

        @media ${theme.mediaQueries.above768}{
            margin-left: 10px;
        }
    }

    .about-me-img-wrapper img{
        width: -webkit-fill-available;
        max-width: 23rem;
        margin-bottom: 1rem;
        border-radius: 15px;
    }

    .about-me-item{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    .about-me-item .item-icon {
        width: 1.5rem;
        margin-right: 10px;
    }

    .dinocloud-logo{
        margin-left: 5px;
        height: 30px;
    }

    .bottom-container h3{
        margin-bottom: .5rem;
    }

    .bottom-container p{
        margin-bottom: 12px;
    }
`;

export default AboutMeContainer;