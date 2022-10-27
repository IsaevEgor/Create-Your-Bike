import React from 'react';
import { CSSTransition } from 'react-transition-group';
import cl from "./bike.module.css";
import moveBike from "../cssTransitions/moveBike.module.css";
import moveWheelBack from "../cssTransitions/moveWheelBack.module.css";
import moveWheelFront from "../cssTransitions/moveWheelFront.module.css";
import ramaUp from "../cssTransitions/rama-up.module.css";
import "../cssTransitions/replaceWheel.css";

interface IBike {
	goAnimation: boolean
	replaceWheels: boolean
	typeWheels: string
}
  
const Bike = ({goAnimation, replaceWheels, typeWheels}:IBike) => {
	console.log(replaceWheels);
	
	
	return (
		<div className={cl.BikeBlock}>
			<CSSTransition
				timeout={2000} 
				in={goAnimation} 
				classNames={moveBike}
			>
				<CSSTransition 
					timeout={3000}
					in={replaceWheels}
					classNames={ramaUp}
					exit={false}
				>
					<div className={cl.Rama}>
						<div className={cl.Sedlo}></div>
						<CSSTransition
							timeout={2000} 
							in={goAnimation} 
							classNames={moveWheelBack}
						>
							<CSSTransition 
								timeout={1800}
								in={replaceWheels}
								classNames={`back-${typeWheels}`}
								exit={false}
							>
								<div className={cl.WheelBack}></div>
							</CSSTransition>
						</CSSTransition>
						<CSSTransition
							timeout={2000} 
							in={goAnimation} 
							classNames={moveWheelFront}
						>	
							<CSSTransition 
								timeout={2500}
								in={replaceWheels}
								classNames={`front-${typeWheels}`}
								exit={false}
							>
								<div className={cl.WheelFront}></div>
							</CSSTransition>

						</CSSTransition>
					</div>
				</CSSTransition>

			</CSSTransition>
		</div>
	);
};

export default Bike;