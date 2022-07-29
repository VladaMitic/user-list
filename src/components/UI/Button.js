import React from 'react';
import style from './Button.module.css';

const Button = ({type, onClick, children}) => {
    return (
        <button className={style.button} type={type || 'button'} onClick={onClick}>{children}</button>
    )
}

export default Button;