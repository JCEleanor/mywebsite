import React, { useState } from 'react';
import Video from '../../videos/video.mp4';

// import { Btn, Button } from '../ButtonElement';
// import { NavBtnLink, NavBtn } from '../Navbar/NavbarElement';

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
	ArrowForward,
	ArrowRight,
	ArrowIcon
} from './HeroElements';

const HeroSection = () => {
	const [ hover, setHover ] = useState(false);

	const onHover = () => {
		setHover(!hover);
	};

	return (
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type="./video/mp4" />
			</HeroBg>
			<HeroContent>
				<HeroH1>Hello, I am Jing-Chun Chiu</HeroH1>
				<HeroP>I am a web developer from Taiwan</HeroP>
				<HeroBtnWrapper>
					{/* <Btn>
						<a href="https://github.com/">Github</a>
					</Btn>

					<Button
						to="/contact"
						onMouseEnter={onHover}
						onMouseLeave={onHover}
						primary="true"
						dark="true"
					>
						Contact Me {hover ? <ArrowForward /> : <ArrowRight />}
					</Button> */}
					{/* <ArrowIcon /> */}
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default HeroSection;
