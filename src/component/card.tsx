import React, {useState} from 'react';
import { CSSTransition, SwitchTransition, Transition } from 'react-transition-group';
import { text } from 'stream/consumers';
import Button from './atoms/Button';
import Cover from './atoms/cover';
import cl from "./card.module.css";
import moveBlock from "./cssTransitions/moveBlock.module.css";
import moveButton from "./cssTransitions/moveButton.module.css";
import Bike from './molecules/Bike';
  
const Card = () => {
	const [goLeft, setGoLeft] = useState(false)

	return (
		<div>
			<Cover/>
			<Bike/>
			<CSSTransition in={goLeft} timeout={5000000} classNames={moveBlock}>
			<div 
						className={`${cl.ContentBlock}`}
						id="contentBlock"
					>

							<SwitchTransition mode='out-in'>
								<CSSTransition
									key={goLeft}
									timeout={1000}
									classNames={moveButton}
									>
									<div className={cl.BlockButton}>
										<Button 
											className={cl.Button}
											onClick={() =>setGoLeft(!goLeft)}
											style={goLeft ? {backgroundColor: "transparent", color: "#ff4800"} : {color: "white"}}
										>
											{goLeft ? "Назад" : "далее"}
										</Button>
										{goLeft 
											?
											<Button 
												className={cl.ButtonBuy} 
											>
												Купить
											</Button>
										:<div></div>
										}
									</div>
								</CSSTransition>
							</SwitchTransition>

					</div>
			</CSSTransition>

		</div>
	);
};

export default Card;