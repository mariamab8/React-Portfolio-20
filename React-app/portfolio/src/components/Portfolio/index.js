import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Portfolio Challenge 2',
			description:
				'A portfolio of work can showcase your skills and talents to employers looking to fill a part-time or full-time position.',
			image: '',
			technologies: [
				'HTML/CSS',
			],
			github: 'https://github.com/mariamab8/Portfolio-Challenge-2',
			deployed: 'https://mariamab8.github.io/Portfolio-Challenge-2/',
		},
		{
			name: 'Password Generator',
			description:
				'To create an application that an employee can use to generate a random password based on specific criteria',
			image: '',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				
			],
			github: 'https://github.com/mariamab8/Challenge-3-Password',
			deployed: 'https://mariamab8.github.io/Challenge-3-Password-Website/',
		},
		{
			name: 'Work Day Scheduler',
			description:
				'Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
			image: '',
			technologies: [
            'HTML/CSS', 
            'JavaScript', 
            'jQuery'
        ],
			github: 'https://github.com/mariamab8/Work-Day-Scheduler',
			deployed: 'https://mariamab8.github.io/Work-Day-Scheduler/',
		},
		
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>

				</ul>
			</div>
		</section>
	);
}

export default Portfolio;