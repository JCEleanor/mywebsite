import React, { useState } from 'react'
import HeroSection from '../Components/HeroSection'
import AboutSection from '../Components/AboutSection'
import { bioText } from '../Components/AboutSection/data'
import Navbar from '../Components/Navbar'
import ProjectSection from '../Components/ProjectSection'
import Sidebar from '../Components/Sidebar'

const Home = () => {
	const [ isOpen, setIsOpen ] = useState(false)
	const toggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<HeroSection />
			<AboutSection {...bioText} />
			<ProjectSection />
		</div>
	)
}

export default Home
