import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItems,
	NavLinks,
	NavBtn,
	NavBtnLink
} from './NavbarElement';

const Navbar = ({ toggle }) => {
	const [ scrollNav, setScrollNav ] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<Nav scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo to="/" onClick={toggleHome}>
					JC
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>
				<NavMenu>
					<NavItems>
						<NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
							About
						</NavLinks>
					</NavItems>
					<NavItems>
						<NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
							Portfolio
						</NavLinks>
					</NavItems>
					{/* <NavItems>
						<NavLinks to="experience" smooth={true} duration={500} spy={true} exact="true" offset={-80}>
							Experience
						</NavLinks>
					</NavItems> */}

					<NavBtn>
						<NavBtnLink to="contact">Contact</NavBtnLink>
					</NavBtn>
				</NavMenu>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
