import styled from 'styled-components';
import theme from './theme';

const TabsContainer = styled.div`
	margin-top: 3rem;
	border: solid ${theme.colors.primaryText};
	border-radius: 5px;
	background-color: ${theme.colors.secondaryBackground};
	height: fit-content;

	.tab-container {
		padding: 10px;
		border-bottom: solid ${theme.colors.primaryText};
		display: flex;
	}

	.tab-dots {
		padding: 6px;
		margin-right: 5px;
		border-radius: 50%;
	}

	.tab-dots:nth-child(1) {
		background-color: ${theme.colors.primaryPurple};
	}

	.tab-dots:nth-child(2) {
		background-color: ${theme.colors.secondaryPurple};
	}

	.tab-dots:nth-child(3) {
		background-color: ${theme.colors.tertiaryPurple};
	}
`;

export default TabsContainer;
