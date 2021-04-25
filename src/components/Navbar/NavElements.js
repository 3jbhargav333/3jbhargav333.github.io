import React from "react";
export function Login(props) {
  return (
    <button
      className={props.className + " login-button"}
      onClick={props.onClick}
    >
      Login
    </button>
  );
}
export function NavLink(props) {
  const Icon = props.icon;
  return (
    <a className="NavLink" href="/">
      {Icon && <Icon />}
      <span>{props.text}</span>
    </a>
  );
}
