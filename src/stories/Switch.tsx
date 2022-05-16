import * as React from "react";
import { useState, CSSProperties } from "react";
import "./switch.scss";

interface PropTypes {
  form?: "box" | "round";
  checked?: boolean;
  buttonColor?: string;
  bgOn?: string;
  bgOff?: string;
  size?: "small" | "medium" | "large";
  onBlur?: () => void;
  onFocus?: () => void;
  onClick?: () => void;
  disabled?: boolean;
}

function Switch(
  {
    form = 'round',
    checked,
    buttonColor,
    bgOn,
    bgOff,
    onBlur,
    onClick,
    onFocus,
    disabled,
    size = 'medium',
    ...props
  }: PropTypes,
  ref: React.ForwardedRef<HTMLDivElement>
) {

  //* toggled is the uncontrolled substitute for the checked prop
  const [toggled, setToggled] = useState(true);
  
  



  const controlled = checked === undefined ? false : true;

  const translation = () =>{
    switch(size){
      case "small":
        return (controlled ? checked : toggled) ? "translateX(15px)" : "translateX(-1px)";
      case "medium":
        return (controlled ? checked : toggled) ? "translateX(19px)" : "translateX(-1px)";
      case "large":
        return (controlled ? checked : toggled) ? "translateX(24px)" : "translateX(-1px)";
    }
  }

  const styles: { [index: string]: CSSProperties } = {
    container: {
      backgroundColor: ((controlled ? checked: toggled) ? bgOn : bgOff)
    },
    switch: {
      //use checked if component is controlled, otherwise use toggled
      transform: translation(),
      backgroundColor: buttonColor,
    },
  };

  const _onClick = (onClick ? onClick : (e:React.SyntheticEvent)=>{
    if(!disabled){
      setToggled(!toggled);
    }
    e.preventDefault();
  })
  const _onBlur = (onBlur ? onBlur : (e:React.SyntheticEvent)=>{
    (e.currentTarget as HTMLElement).blur();
    e.preventDefault();
  })

  const _onFocus = (onFocus ? onFocus : (e:React.SyntheticEvent)=>{  
    (e.currentTarget as HTMLElement).focus();
    e.preventDefault();
  })

  return (
    <div
      ref={ref}
      className={["container", `container--${form}`, `container--${size}`].join(" ")}
      style={styles["container"]}
      onClick={_onClick}
      onBlur={_onBlur}
      onFocus={_onFocus}
      {...props}
    >
      <div
        className={["switch", `switch--${form}`, `switch--${size}`].join(" ")}
        style={styles["switch"]}
      />
    </div>
  );
}

export default React.forwardRef<HTMLDivElement, PropTypes>(Switch);
