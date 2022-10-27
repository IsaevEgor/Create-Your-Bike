import React, {useState} from 'react';
import { CSSTransition, SwitchTransition, Transition } from 'react-transition-group';
import { start } from 'repl';
import { text } from 'stream/consumers';
import Button from './atoms/Button';
import Cover from './atoms/cover';
import cl from "./card.module.css";
import moveBlock from "./cssTransitions/moveBlock.module.css";
import moveButton from "./cssTransitions/moveButton.module.css";
import moveVariantBlock from "./cssTransitions/moveVariantBlock.module.css";
import moveText from "./cssTransitions/moveText.module.css";
import Bike from './molecules/Bike';
  
const Card = () => {
	const [goAnimation, setGoAnimation] = useState(false)
	const [replaceWheels, setReplaceWheels] = useState(false)
	const [typeWheels, setTypeWheels] = useState('')

	function returnTrueWheels(type:string) {
		setTypeWheels(type)
	}

	return (
		<div>
			<Cover/>
			<Bike 
				goAnimation={goAnimation}
				replaceWheels={replaceWheels}
				typeWheels={typeWheels}
			/>
			{/*
			<SwitchTransition mode='out-in'>
				<CSSTransition
					key={goAnimation}
					classNames={moveText}
					timeout={1000}
				>
					{goAnimation 
					 ? <p className={cl.SecondText}>Отлично выглядит!</p>
					 : <p className={cl.StartText}>Создай Свой Bike!</p>
					}
				</CSSTransition>
			</SwitchTransition>
			*/}
			<CSSTransition in={goAnimation} timeout={1500} classNames={moveBlock}>
			<div 
						className={`${cl.ContentBlock}`}
						id="contentBlock"
					>

							<SwitchTransition mode='out-in'>
								<CSSTransition
									key={goAnimation}
									timeout={1000}
									classNames={moveButton}
									>
									<div className={cl.BlockButton}>
										<Button 
											className={cl.Button}
											onClick={() =>setGoAnimation(!goAnimation)}
											style={goAnimation ? {backgroundColor: "transparent", color: "#ff4800"} : {color: "white"}}
										>
											{goAnimation ? "Назад" : "далее"}
										</Button>
										{goAnimation 
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
			<div className={cl.BlockHidden}>
				<CSSTransition
					in={goAnimation}
					timeout={2000}
					classNames={moveVariantBlock}
				>
					<div className={cl.Block}>
						<h4 className={cl.Title}>Колеса</h4>
						<span className={cl.Span}>(для смены сделайте двойной клик)</span>
						<div className={cl.FlexBlock}>
							<div className={cl.Item}
								onClick={() => {
									returnTrueWheels('type1')
									setReplaceWheels(!replaceWheels)
								}}
							>
								<div className={cl.Img}/>
							</div>
							<div className={cl.Item}
								onClick={() => {
									returnTrueWheels('type2')
									setReplaceWheels(!replaceWheels)
								}}
							>
								<div className={cl.Img}/>
							</div>
							<div className={cl.Item}
								onClick={() => {
									returnTrueWheels('type3')
									setReplaceWheels(!replaceWheels)
								}}
							>
								<div className={cl.Img}/>
							</div>
							<div className={cl.Item}
								onClick={() => {
									returnTrueWheels('type4')
									setReplaceWheels(!replaceWheels)
								}}
							>
								<div className={cl.Img}/>
							</div>
						</div>
					</div>
				</CSSTransition>
			</div>
		</div>
	);
};

export default Card;