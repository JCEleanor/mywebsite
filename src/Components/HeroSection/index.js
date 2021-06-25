import Video from '../../videos/video.mp4'

import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtnWrapper,
} from './HeroElements'

import {ArrowDown, NavLinks} from '../ButtonElement'

const HeroSection = () => {

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
						<ArrowDown isWhite={true}/>
					</NavLinks>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	)
}

export default HeroSection
