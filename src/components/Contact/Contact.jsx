import React from 'react';
import StyledContact from './ContactStyles';
import githubLogo from './assets/github-logo.png';
import linkedinLogo from './assets/linkedin-logo.png';

const Contact = () => {
	return (
		<StyledContact>
			<h2>
				Contact<span>:</span>
			</h2>
			<div className="contact-container">
				<div className="contact-text">
					<p>
						Hey, you! <br /> Thanks for reaching the end of this page :-)
					</p>
					<p>
						If you want to find out more about me or know what I'm up to check
						the links <span className="mobile-text">below !</span>{' '}
						<span className="desktop-text">on the right !</span>
					</p>
				</div>
				<div className="contact-social-media">
					<p>
						Pop me an{' '}
						<a href="mailto:jmmariafernanda15@gmail.com">
							<span className="email">Email!</span>
						</a>
					</p>
					<p>
						Or let's get social throught<span>:</span>
					</p>
					<div className="social-media-container">
						<div>
							<a
								href="https://github.com/maferjimnez"
								target="_blank"
								rel="noreferrer">
								<img src={githubLogo} alt="Github logo" />
							</a>
						</div>
						<div>
							<a
								href="https://www.linkedin.com/in/maria-fernanda-jimenez/"
								target="_blank"
								rel="noreferrer">
								<img src={linkedinLogo} alt="Linkedin logo" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</StyledContact>
	);
};

export default Contact;
