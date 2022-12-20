import React from "react";

// importing navbar styles.
import "../styles/Navbar.css"

function Navbar() {
	return (
		<>
			<header>
				<nav className="navbar">
					<div className="logo--area">
						<img
							src="https://tse3.mm.bing.net/th?id=OIP.FuHyW9jXiiTwU-EQcB8kdAHaE8&pid=Api&P=0"
							alt="airbnb logo"
						/>
					</div>
					<div className="anywhere--anyweek">
						<div className="anywhere">
							<p>anywhere</p>
						</div>
						<div className="any--week">
							<p>any week</p>
						</div>
						<div className="search--box">
							<p>add guests</p>
							<span className="search--icon">
								<img
									src="https://cdn-icons-png.flaticon.com/512/2989/2989907.png"
									alt="search icon"
								/>
							</span>
						</div>
					</div>
					<div className="user--area">
						<div className="text--area">
							<p>Airbnb your home</p>
						</div>
						<div className="globe--icon">
							<img
								src="https://cdn-icons-png.flaticon.com/512/546/546310.png"
								alt="search icon"
							/>
						</div>
						<div className="user--input--area">
							<div className="bars--icon">
								<img
									src="https://cdn-icons-png.flaticon.com/512/8860/8860934.png"
									alt="search icon"
								/>
							</div>
							<div className="user--avatar">
								<span className="notification"></span>
								<div className="avatar--image">
									<img
										src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
										alt="search icon"
									/>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
