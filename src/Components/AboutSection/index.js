import React from 'react';
import { GithubIcon, LinkedinIcon, IconWrapper, CamIcon } from '../ButtonElement';
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
} from './AboutElements';

const AboutSection = ({
	lightBg,
	id,
	imgStart,
	topLine,
	lightText,
	headline,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2
}) => {
	return (
		<InfoContainer lightBg={lightBg} id={id}>
			<InfoWrapper>
				<InfoRow imgStart={imgStart}>
					<Column2>
						<ImgWrap>
							<Img src={img.default} alt={alt} />
						</ImgWrap>
					</Column2>
					<Column1>
						<TextWrapper>
							<TopLine>{topLine}</TopLine>
							<Heading lightText={lightText}>{headline}</Heading>
							<Subtitle darkText={darkText}>{description}</Subtitle>
							<BtnWrap>
								{/* <Btn
									to="home"
									smooth={true}
									duration={500}
									spy={true}
									exact="true"
									offfset={80}
									primary={primary ? 1 : 0}
									dark={dark ? 1 : 0}
									dark2={dark2 ? 1 : 0}
								>
									{buttonLabel}
								</Btn> */}
							</BtnWrap>
						</TextWrapper>
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
							<a
								href="http://web.ntnu.edu.tw/~40521207l/website_main.html"
								target="_blank"
								rel="noreferrer"
							>
								<CamIcon />
							</a>
						</IconWrapper>
					</Column1>
				</InfoRow>
			</InfoWrapper>
		</InfoContainer>
	);
};

export default AboutSection;
