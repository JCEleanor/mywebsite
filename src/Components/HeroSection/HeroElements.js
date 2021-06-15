import styled, { keyframes } from 'styled-components'
// import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Link as LinkS } from 'react-scroll'

export const HeroContainer = styled.div`
	background: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	${'' /* padding: 0 30px */} height: 100vh;
	position: relative;
	z-index: 1;

	:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, ragb(0, 0, 0, 0.6) 100%),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`

export const VideoBg = styled.video`
	width: 100%;
	height: 100vh;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`

export const HeroContent = styled.div`
	z-index: 3;
	max-width: 1200px;
	position: absolute;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const HeroH1 = styled.h1`
	color: #fff;
	font-size: 48px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 40px;
	}

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`
export const HeroP = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}

	@media screen and (max-width: 480px) {
		font-size: 18px;
	}
`
export const HeroBtnWrapper = styled.div`
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const bounce = keyframes`

0% {
    transform:translateY(0%);
}

50% {
  transform:translateY(20%);
}

100% {
  transform:translateY(0%);
}

`

export const ArrowDown = styled(MdKeyboardArrowDown)`
  color: white;
  width: 50px;
  height: 50px;
  animation: ${bounce} 700ms linear infinite;

`
export const NavLinks = styled(LinkS)`
  cursor: pointer;
  text-decoration: none;
`