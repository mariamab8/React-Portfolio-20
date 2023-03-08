import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					// src={require('../../assets/images/recent-photo.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a newly full stack web developer looking to build a more
					intuitive user experience on the web. I recently earned
					a certificate in full stack development from the
					UC Berkely Extension bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and many more.
 
				</p>
				<p>
					
				</p>
			</div>
		</section>
	);
}

export default About;