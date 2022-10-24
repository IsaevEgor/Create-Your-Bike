import React from 'react';
import cl from "./bike.module.css";
  
const Bike = () => {
	return (
		<div className={cl.BikeBlock}>
			<div className={cl.Rama}></div>
			<div className={cl.Sedlo}></div>
		</div>
	);
};

export default Bike;