import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SideBarRoute
} from './SidebarElement';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="portfolio" onClick={toggle}>
						Portfolio
					</SidebarLink>
					<SidebarLink to="experience" onClick={toggle}>
						Experience
					</SidebarLink>
				</SidebarMenu>
				<SideBtnWrap>
					<SideBarRoute to="./contact">Contact Me</SideBarRoute>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
