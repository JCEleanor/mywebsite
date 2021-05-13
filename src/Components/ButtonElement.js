import { Button } from 'react-scroll';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { AiFillGithub, AiFillLinkedin, AiFillCamera } from 'react-icons/ai';
import { AiFillAlert } from 'react-icons/ai';

// export const Btn = styled.button`
// 	border-radius: 50px;
// 	background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
// 	white-space: nowrap;
// 	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
// 	color: ${({ dark }) => (dark ? '#010606' : '#fff')};
// 	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
// 	outline: none;
// 	border: none;
// 	cursor: pointer;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	transition: all 0.2s ease-in-out;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
// 	}
// `;

export const IconWrapper = styled.div`
	background: transparent;
	cursor: pointer;
	outline: none;
	display: flex;
	justify-content: flex-start;
`;

export const GithubIcon = styled(AiFillGithub)`
    color: #666666;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 992px) {
		width: 40px;
        height: 40px;
	}
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
    color: #666666;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 992px) {
		width: 40px;
        height: 40px;
	}

`;

export const CamIcon = styled(AiFillCamera)`
    color: #666666;
    width: 50px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 992px) {
		width: 40px;
        height: 40px;
	}

`;
// export const Button = styled.button`
// 	border-radius: 50px;
// 	background: ${({ primary }) => (primary ? '#01bf71' : '#010606')};
// 	white-space: nowrap;
// 	padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
// 	color: ${({ dark }) => (dark ? '#010606' : '#fff')};
// 	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
// 	outline: none;
// 	border: none;
// 	cursor: pointer;
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	transition: all 0.2s ease-in-out;

// 	&:hover {
// 		transition: all 0.2s ease-in-out;
// 		background: ${({ primary }) => (primary ? '#fff' : '#01bf71')};
// 	}
// `;
