import React from 'react';
const Homepage=()=>{
	return(
		<div>
			<nav className="navbar navbar-default menutop">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand menu" href="/">
							Huynhpro
						</a>
					</div>
					<ul className="nav navbar-nav menu">
						<li><a className="menu" href="/">Home</a></li>
						<li><a className="menu" href="/topics">Topics</a></li>
						<li><a className="menu" href="/about">About</a></li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Homepage;