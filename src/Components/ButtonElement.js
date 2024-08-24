import styled, { keyframes } from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { AiFillGithub, AiFillLinkedin, AiFillMail, AiFillInstagram } from 'react-icons/ai'

export const IconWrapper = styled.div`
	background: transparent;
  margin: 12px auto;
	outline: none;
	display: flex;
	justify-content: flex-start;
  height: fit-content;
`

export const GithubIcon = styled(AiFillGithub)`
    color: #666666;
    width: 45px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;

    @media screen and (max-width: 992px) {
		width: 40px;
    height: 40px;
	}

    transition: opacity 500ms;
    &:hover {
		  opacity: 80%;
	  }
`

export const LinkedinIcon = styled(AiFillLinkedin)`
    color: #666666;
    width: 45px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 992px) {
		  width: 40px;
      height: 40px;
	  }
    transition: opacity 500ms;
    &:hover {
		  opacity: 80%;
	  }
`
export const GmailIcon = styled(AiFillMail)`
    color: #666666;
    width: 45px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 992px) {
      width: 40px;
      height: 40px;
    }
    transition: opacity 500ms;
    &:hover {
		  opacity: 80%;
	  }
`

export const InstagramIcon = styled(AiFillInstagram)`
    color: #666666;
    width: 45px;
    height: 50px;
    margin-right: 10px;
    cursor: pointer;
    @media screen and (max-width: 992px) {
      width: 40px;
      height: 40px;
    } 
    transition: opacity 500ms;
    &:hover {
		  opacity: 80%;
	  }
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
}`

export const NavLinks = styled(LinkS)`
  cursor: pointer;
  text-decoration: none;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
  color: ${({ isWhite }) => (isWhite ? '#fff' : 'rgba(189, 189, 189)')};
  width: 50px;
  height: 50px;
  animation: ${bounce} 700ms linear infinite;
`