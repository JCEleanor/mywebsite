import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? 'rgba(189, 189, 189, 0.6)' : 'transparent')};
	height: 80px;
	margin-top: -80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`

export const NavbarContainer = styled.div`
	display: felx;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	margin: 0 -20px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
	text-decoration: underline 0.15em rgba(0, 0, 0, 0);
    transition: text-decoration-color 500ms;

	&:hover {
		text-decoration-color: rgba(0, 0, 0, 1);
	}
`

export const MobileIcon = styled.div`
	display: none;
	color: #fff;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavItems = styled.li`height: 80px;`

export const NavLinks = styled(LinkS)`
	color: #fff;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #bdbdbd;
	};

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #060606;
	}
`
export const NavBtn = styled.nav`
	display: felx;
	align-itemes: center;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const NavBtnLink = styled(LinkR)`

	color: #fff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-right: 20px;

	&:hover {
		transition: all 0.2s ease-in-out;
		color: #060606;
	}
`
