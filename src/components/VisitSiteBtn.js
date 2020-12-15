import React from "react";
import "./style.css";

// button to open the official site of the tv show
function VisitSiteBtn(props) {
  return (
    <span className="btn btn-info btn-view" {...props} role="button" tabIndex="0">
      Visit Site
    </span>
  );
}

export default VisitSiteBtn;
