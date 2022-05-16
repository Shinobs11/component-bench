
import * as React from 'react';
import { useState, useRef, forwardRef, useEffect } from 'react';
import {pSBC} from '../utils';
import './button.scss';

interface PropTypes{
  size?: 'small'|'medium'|'large';
  backgroundColor?: string;
  borderColor?: string;
  form?: 'box' | 'round';
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  disabled?: boolean;
}


function Button({
  size = 'medium',
  backgroundColor = '#74c9fa',
  borderColor,
  form = 'round',
  onClick,
  onBlur,
  onFocus,
  disabled = false,
  children,
   ...props}:React.PropsWithChildren<PropTypes>,
    ref:React.ForwardedRef<HTMLButtonElement>) {
  const [color, setColor] = useState(backgroundColor);
  const colorCache = useRef<string|null>(null);
  

  const style:{[index:string]:React.CSSProperties} = {
    button: {
      backgroundColor: color,
      borderColor: (borderColor === undefined)? color : borderColor,
    }
  }
 
  useEffect(()=>{
    colorCache.current = null;
  },[backgroundColor])
  
 
 

   /**
   * Ideally I'd like to have applied :hover in css,
   * but i couldn't find a way to do this and pass the original color as props.
   */

  const onMouseEnter = () =>{
    if(!colorCache.current){
      colorCache.current = (pSBC(-0.2, backgroundColor) as string)
      setColor(colorCache.current);
    }
    else{
      setColor(colorCache.current);
    }
  }
  const onMouseLeave = () =>{
    setColor(backgroundColor);
  }



  
  return (
    <button
    type='button'
    className={['button', `button--${size}`, `button--${form}`].join(" ")}
    style={style.button}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    onBlur={onBlur}
    onFocus={onFocus}
    ref={ref}
    disabled={disabled}
    {...props}
    >
      {children} 
    </button>
  );
}

export default forwardRef<HTMLButtonElement, PropTypes>(Button);