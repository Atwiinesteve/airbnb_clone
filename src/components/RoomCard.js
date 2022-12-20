import React from 'react';

// importing styles.
import "../styles/RoomCard.css";

function RoomCard({ image, title, rating, distance, date, price, time }) {

  return (
		<>
			<div className="card">
				<div className="card--image">
					<img src={image} alt="house" />
					<div
						className="heart--logo"
						style={{ color: "rgb(241, 63, 93)", fontSize: "2rem" }}>
						&hearts;
					</div>
				</div>
				<div className="card--title">
					<div className="title">{title}</div>
					<div className="rating">{rating}</div>
				</div>
				<div className="card--distance">
					<p>{distance}</p>
				</div>
				<div className="card--date">
					<p>{date}</p>
				</div>
				<div className="card--price">
					<p className="amount">{price}</p>
					<p className="time">{time}</p>
				</div>
			</div>
		</>
	);

}

export default RoomCard;
