import React from 'react'
import { NavLink } from "react-router-dom";

const Link = ({path,text,onClick}) => {
  return (
    <NavLink className="link" to={path} onClick={onClick}>
      {text}
    </NavLink>
  );
}

export default Link