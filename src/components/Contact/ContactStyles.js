import styled from "styled-components";
import theme from "../../styles/theme";

const StyledContact = styled.section`
    padding: ${theme.paddings.sectionMobile};
    background: ${theme.colors.primaryBackground};
    @media ${theme.mediaQueries.above768} {
        padding: ${theme.paddings.sectionDesktop};
        padding-top: 6rem;
    }

    p{
        font-size: 20px;
        @media ${theme.mediaQueries.above1024} {
            font-size: 28px;
        }
    }

    .mobile-text{
        @media ${theme.mediaQueries.above1024}{
            display: none;
        }
    }

    .contact-container{
     margin-top: 2rem;
    @media ${theme.mediaQueries.above1024} {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}

.contact-text{
    @media ${theme.mediaQueries.above1024} {
        width: 55%;
    }
}
.contact-text p:nth-child(2){
    margin-top: 10px;
}

.desktop-text{
    display: none;
    @media ${theme.mediaQueries.above1024}{
        display: inline-block;
    }
}

.contact-social-media{
    margin-top: 25px;

    @media ${theme.mediaQueries.above1024}{
        text-align: center;
    }
}

.social-media-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
}

.email{ 
    border-bottom: 2px solid ${theme.colors.textDetails};
}

.social-media-container div:first-child a img{
    width: 4rem;
}

.social-media-container div:nth-child(2) a img{
    width: 3.7rem;
}
`;

export default StyledContact;