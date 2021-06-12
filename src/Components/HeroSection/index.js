import React, { useState } from 'react'
import Video from '../../videos/video.mp4'

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowDown } from './HeroElements'

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
					<ArrowDown />
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
