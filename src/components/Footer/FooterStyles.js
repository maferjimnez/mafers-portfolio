import styled from "styled-components";
import theme from "../../styles/theme";

const StyledFooter = styled.section`
padding-top: 7rem;
background: ${theme.colors.primaryBackground};
div{
    padding: 1rem;
text-align: center;
background-color: ${theme.colors.tertiaryPurple};
}
`;

export default StyledFooter;