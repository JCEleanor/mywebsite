import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';
import {
	ProjectContainer,
	ProjectH1,
	ProjectWrapper,
	ProjectCard,
	ProjectH2,
	ProjectP,
	ProjectIcon
} from './ProjectElements';

const Project = () => {
	return (
		<ProjectContainer id="portfolio">
			<ProjectH1>Projects</ProjectH1>
			<ProjectWrapper>
				<a href="https://github.com/" target="_blank">
					<ProjectCard>
						<ProjectIcon src={Icon1} />
						<ProjectH2>Python web scraping to CSV file</ProjectH2>
						<ProjectP>Extracted data from a board game site and compiled it to csv file.</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/" target="_blank">
					<ProjectCard>
						<ProjectIcon src={Icon2} />
						<ProjectH2>Watermark Maker with Python Imaging Library</ProjectH2>
						<ProjectP>A Watermark Maker that generated customed watermark in customed position.</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/" target="_blank">
					<ProjectCard>
						<ProjectIcon src={Icon3} />
						<ProjectH2>Reservation System with PHP and MySQL</ProjectH2>
						<ProjectP>A reservation system that performs basic CRUD functionality.</ProjectP>
					</ProjectCard>
				</a>
			</ProjectWrapper>
		</ProjectContainer>
	);
};

export default Project;
