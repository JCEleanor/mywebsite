import React from 'react'
import { GithubIcon, LinkedinIcon, IconWrapper } from '../ButtonElement'
import Resume from './Resume/Resume'
import {
	InfoContainer,
	InfoWrapper,
	InfoRow,
	Column1,
	Column2,
	TextWrapper,
	TopLine,
	Heading,
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
	lightText,
	headline,
	darkText,
	description1,
	description2,
	description3,
	img,
	alt
}) => {
	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column2>
						<ImgWrap>
							<Img src={img.default} alt={alt} />
						</ImgWrap>
						<IconWrapper>
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
							<Resume />
						</IconWrapper>


					</Column2>
					<Column1>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightText={lightText}>{headline}</Heading>
							<Subtitle darkText={darkText}>
								{description1}
								<br />
								{description2}
								<br />
								{description3}
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
