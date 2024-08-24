import React from 'react'
import { GithubIcon, LinkedinIcon, IconWrapper, GmailIcon, InstagramIcon } from '../ButtonElement'
import Resume from './Resume/Resume'
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Subtitle,
	BtnWrap,
	ImgWrap,
	Img
} from './AboutElements'
import { ArrowDown, NavLinks } from '../ButtonElement'


const AboutSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	darkText,
	description1,
	description2,
	description3,
	description4,
	img,
	alt
}) => {
	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column2>
						<IconWrapper>
							<TopLine>{topLine}</TopLine>
							<a href="https://github.com/JCEleanor" target="_blank" rel="noreferrer">
								<GithubIcon />
							</a>
							<a
								href="https://www.linkedin.com/in/eleanor-chiu-4316b420b/"
								target="_blank"
								rel="noreferrer"
								>
								<LinkedinIcon />
							</a>
							<a
								href="https://www.instagram.com/chunchunclimb"
								target="_blank"
								rel="noreferrer"
								>
								<InstagramIcon />
							</a>
							<a
								href="mailto:crcky4826@gmail.com"
								target="_blank"
								rel="noreferrer"
								>
								<GmailIcon />
							</a>
						</IconWrapper>

						<ImgWrap>
							<Img src={img.default} alt={alt} />
						</ImgWrap>


					</Column2>
					<Column1>
						<TextWrapper>
							<Subtitle darkText={darkText}>
								<div style={{marginBottom: '8px'}}>
									{description1}
								</div>
								<div style={{marginBottom: '8px'}}>
									{description2}
								</div>
								<div style={{marginBottom: '8px'}}>
									{description3}
								</div>
								<div style={{marginBottom: '8px'}}>
									{description4}
								</div>
							</Subtitle>
							<BtnWrap />
						</TextWrapper>

					</Column1>
				</InfoRow>
			</InfoWrapper>
			<NavLinks style={{ position: 'absolute', bottom: '85px'}} to="portfolio" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
				<ArrowDown  isWhite={false} />
			</NavLinks>
		</InfoContainer>
	)
}

export default AboutSection
