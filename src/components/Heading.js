import React from "react";
import "./style.css";

// header part of the page
function Heading({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid border border-dark rounded heading">
      {children}
    </div>
  );
}

export default Heading;