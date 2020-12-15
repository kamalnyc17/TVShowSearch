import React from "react";
import "./style.css";

// results grid component
function Results({ children }) {
  return (
    <div className="jumbotron jumbotron-fluid border border-dark rounded results">
      {children}
    </div>
  );
}

export default Results;