import styled from 'styled-components'

export const InfoContainer = styled.div`
	color: #fff;
	background: #f9f9f9;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	@media screen and (max-width: 768px) {
		padding: 100px 0;
		height: fit-content;
	}
`
export const InfoWrapper = styled.div`
	display: flex;
	z-index: 1;
	width: 100%;
	max-width: 1200px;
	margin: auto;
	padding: 24px;
	padding-top: 40px;
	justify-content: center;
`

export const InfoRow = styled.div`
	display: flex;
	margin: 20px;
	align-item: center;
	@media screen and (max-width: 992px) {
		flex-direction: column;
	}
`

export const Column1 = styled.div`
	margin: 0 25px;
	padding: 0 15px;
	grid-area: col1;
	@media screen and (max-width: 480px) {
		margin: 0px;
	}
`
//image & icons
export const Column2 = styled.div`
	margin: 0 25px;
	padding: 0 15px;
	grid-area: col2;
	@media screen and (max-width: 992px) {
		display: flex;
		margin-bottom: 20px;
	}
`
export const TextWrapper = styled.div`
	max-width: 850px;
	padding-top: 0;
`

export const TopLine = styled.p`
	color: #666666;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`
export const Heading = styled.h1`
	color: #b0b0b0;
	margin-bottom: 24px;
	font-size: 30px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '010606')};
	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`

export const Subtitle = styled.p`
	${'' /* max-width: 650px; */} width: 100%;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 30px;
	letter-spacing: 1px;
	color: #666666;
	@media screen and (max-width: 992px) {
		font-size: 14px;
	}
`
export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`

export const ImgWrap = styled.div`
	width: 25vw;
	height: 25vw;
	max-width: 400px;
	max-height: 400px;
`

export const Img = styled.img`
	width: 100%;
	height: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
	overflow: hidden;
	object-fit: cover;
`
