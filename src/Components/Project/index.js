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
				<a href="https://github.com/JCEleanor/web-sraping-with-python" target="_blank" rel="noreferrer">
					<ProjectCard>
						<ProjectIcon src={Icon1} />
						<ProjectH2>Python web scraping to CSV file</ProjectH2>
						<ProjectP>Extracted data from a boardgame site and compiled it to csv file.</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/JCEleanor/watermark-generator" target="_blank" rel="noreferrer">
					<ProjectCard>
						<ProjectIcon src={Icon2} />
						<ProjectH2>Watermark Maker with Python Imaging Library</ProjectH2>
						<ProjectP>A Watermark Maker that generated customed watermark in a customed position.</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/JCEleanor/boardgame" target="_blank" rel="noreferrer">
					<ProjectCard>
						<ProjectIcon src={Icon3} />
						<ProjectH2>Reservation System with PHP and MySQL</ProjectH2>
						<ProjectP>
							A group project on github where I collaborated with five other contributors to build a
							fictional boardgame website using MySQL and PHP.
						</ProjectP>
					</ProjectCard>
				</a>
			</ProjectWrapper>
		</ProjectContainer>
	);
};

export default Project;
