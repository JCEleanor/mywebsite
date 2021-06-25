import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

export const IconWrapper = styled.div`
	background: transparent;
  margin-top: 25px;
	outline: none;
	display: flex;
	justify-content: flex-start;
  height: fit-content;
  @media screen and (max-width: 992px) {
		margin-left: 20px;
	}

`

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
`

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

`
