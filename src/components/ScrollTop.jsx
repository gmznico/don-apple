import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  return (
    <>
      <a href="#navbar">
        <FontAwesomeIcon icon={faArrowUp} className="ScrollArrow" />
      </a>
    </>
  );
};

export default ScrollTop;
