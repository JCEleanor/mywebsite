import React, { useState } from 'react';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjTwo } from '../Components/InfoSection/data';
import Navbar from '../Components/Navbar';
import Project from '../Components/Project';
import Sidebar from '../Components/Sidebar';

const Home = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<InfoSection {...homeObjTwo} />

			<Project />
		</div>
	);
};

export default Home;
