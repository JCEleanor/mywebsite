import styled from 'styled-components';

export const ProjectContainer = styled.div`
    min-height: 100vh;
	padding-top: 20px;
	padding-bottom: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #e6dec1;

    @media screen and (max-width: 768px) {
        height: fit-content;

    @media screen and (max-width: 480) {

        height: fit-content;
    }
`;

export const ProjectWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	grid-gap: 30px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

export const ProjectCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 410px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;
export const ProjectImg = styled.img`
	height: 100%;
    width: 100%;
	object-fit:cover;
	overflow: hidden;
`;

export const ProjectImgWrapper = styled.div`
	height:250px;
	width:auto;
	margin-bottom: 20px;
`

export const ProjectH1 = styled.h1`
	font-size: 2.5rem;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

export const ProjectH2 = styled.h2`
	font-size: 1rem;
	margin-bottom: 10px;
`;

export const ProjectP = styled.p`
	font-size: 1rem;
	text-algin: center;
`;
