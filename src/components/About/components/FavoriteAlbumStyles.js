import styled from "styled-components";
import theme from "../../../styles/theme";

const AlbumContainer = styled.div`
padding: 1rem 1.5rem;

iframe{
    margin-top: 1rem;
    height: 20rem;
    border-radius: 7px;

    @media ${theme.mediaQueries.above1200}{
        height: 10rem;
    }
}
`
export default AlbumContainer;