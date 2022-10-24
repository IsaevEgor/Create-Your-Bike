import React from 'react';
import cl from "./button.module.css";
  
interface IButton {
	text?: string
	onClick?: any
	className?: string
	children?: any
	style?: any
}

const Button = ({text, onClick, className, children, style}:IButton) => {
	return (
		<a 
			className={`${cl.Button} ${className}`}
			onClick={onClick}
			style={style}
			>
			<p>{children}</p>
		</a>
	);
};

export default Button;