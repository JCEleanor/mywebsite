import React, { useState } from 'react'
import Video from '../../videos/video.mp4'

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowDown,
	NavLinks
} from './HeroElements'

const HeroSection = () => {
	const [ hover, setHover ] = useState(false)

	const onHover = () => {
		setHover(!hover)
	}

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="./video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Hello, I am Jing-Chun Chiu</HeroH1>
				<HeroP>An aspiring developer from Taiwan</HeroP>
				<HeroBtnWrapper>
					<NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
						<ArrowDown />
					</NavLinks>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
