import React from "react";
import "../index.css";

const RedirectBox = ({ label, link, backgroundImage }) => {
  return (
    <a
      href={link}
      className="redirect-box"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <span className="redirect-label">{label}</span>
    </a>
  );
};

export default RedirectBox;
