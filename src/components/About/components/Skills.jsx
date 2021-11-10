import React from 'react';
import TabsContainer from '../../../styles/TabsContainer';
import SkillsContainer from './SkillsStyles';
import HTMLLogo from '../assets/html-logo.png';
import CSSLogo from '../assets/css-logo.png';
import JSLogo from '../assets/javascript-logo.png';
import SassLogo from '../assets/sass-logo.png';
import ReactLogo from '../assets/react-logo.png';
import StyledLogo from '../assets/styled-components-logo.png';
import BootstrapLogo from '../assets/bootstrap-logo.png';
import GithubLogo from '../assets/github-logo.png';
import GitLogo from '../assets/git-logo.png';

function Skills() {
	return (
		<TabsContainer>
			<div className="tab-container">
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
				<div className="tab-dots"></div>
			</div>
			<SkillsContainer>
				<div className="skills-text">
					<h3 className="skills-title">
						Skills <span>:</span>
					</h3>
					<ul className="skills-list">
						<li>
							<img src={HTMLLogo} alt="HTML logo" />
						</li>
						<li>
							<img src={CSSLogo} alt="CSS logo" />
						</li>
						<li>
							<img src={SassLogo} alt="Sass logo" />
						</li>
						<br />
						<li>
							<img src={BootstrapLogo} alt="Bootstrap logo" />
						</li>
						<li>
							<img src={JSLogo} alt="Javascript logo" />
						</li>
						<li>
							<img src={ReactLogo} alt="React logo" />
						</li>
						<br />
						<li>
							<img src={StyledLogo} alt="Styled components logo" />
						</li>
						<li>
							<img src={GithubLogo} alt="Github logo" />
						</li>
						<li>
							<img src={GitLogo} alt="Git logo " />
						</li>
					</ul>
				</div>
			</SkillsContainer>
		</TabsContainer>
	);
}

export default Skills;
