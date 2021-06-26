import React from 'react';
import project1 from '../../images/projects/project1.png'
import project2 from '../../images/projects/project2.png'
import project3 from '../../images/projects/project3.png'
import {
	ProjectContainer,
	ProjectH1,
	ProjectWrapper,
	ProjectCard,
	ProjectH2,
	ProjectP,
	ProjectImg,
	ProjectImgWrapper
} from './ProjectElements';

const ProjectSection = () => {
	return (
		<ProjectContainer id="portfolio">
			<ProjectH1>Projects</ProjectH1>
			<ProjectWrapper>
				<a href="https://github.com/JCEleanor/yelp-camp" target="_blank" rel="noreferrer">
					<ProjectCard>
					<ProjectImgWrapper>
						<ProjectImg src={project1} />
						</ProjectImgWrapper>
						<ProjectH2>Yelp Camp</ProjectH2>
						<ProjectP>A crowdsourcing platform for campers to post or review campgrounds.</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/JCEleanor/react-widgets" target="_blank" rel="noreferrer">
					<ProjectCard>
					<ProjectImgWrapper>
							<ProjectImg src={project2} />
							</ProjectImgWrapper>
						<ProjectH2>React widgets</ProjectH2>
						<ProjectP>An assortment of React widgets including todo list, shopping cart and infinite scroll.</ProjectP>
					</ProjectCard>
				</a>
				<a href="http://web.ntnu.edu.tw/~40521207l/photoblog/index.html" target="_blank" rel="noreferrer">
					<ProjectCard>
						<ProjectImgWrapper>
							<ProjectImg src={project3} />
						</ProjectImgWrapper>
						<ProjectH2>Photo Blog/instagram clone</ProjectH2>
						<ProjectP>
							My personal photo blog built with pure HTML and CSS.
						</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/JCEleanor/watermark-generator" target="_blank" rel="noreferrer">
					<ProjectCard>
						<ProjectImgWrapper>
							<ProjectImg src="https://raw.githubusercontent.com/JCEleanor/watermark-generator/main/example_output/position_demo.jpg" />
						</ProjectImgWrapper>
						<ProjectH2>Watermark Generator</ProjectH2>
						<ProjectP>
						A watermark generator built with Python that allows users to print watermark in custom positions.
						</ProjectP>
					</ProjectCard>
				</a>
				<a href="https://github.com/JCEleanor/watermark-generator" target="_blank" rel="noreferrer">
					<ProjectCard>
						<ProjectImgWrapper>
							<ProjectImg src="https://raw.githubusercontent.com/JCEleanor/boardgame/reservations/demo/demo-1.png" />
						</ProjectImgWrapper>
						<ProjectH2>Reservation System</ProjectH2>
						<ProjectP>
						An online reservation system that performs CRUD functionality.
						</ProjectP>
					</ProjectCard>
				</a>
			</ProjectWrapper>
		</ProjectContainer>
	);
};

export default ProjectSection;
