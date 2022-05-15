import * as React from 'react';
import { useState, useEffect } from 'react';
import './button.scss';

interface PropTypes{
  size?: 'small'|'medium'|'large';
  backgroundColor?: string;
  onClick?: ()=>void
}


function Button({size = 'medium', backgroundColor = '#74c9fa', ...props}:React.PropsWithChildren<React.PropsWithRef<PropTypes>>) {
  const style:{[index:string]:React.CSSProperties} = {
    button: {
      backgroundColor: backgroundColor
    }
  }
  
  return (
    <button
    type='button'
    className={[['button', size].join("-")].join(" ")}
    style={style.button}
    >
      {props.children} 
    </button>
  );
}

export default Button;