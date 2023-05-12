import React from "react";

import './styles.scss'
export default function Refresh() {
  return (
    <div className="refresh-container">
      <div className="browser">
        <div className="controls">
          <i></i>
          <i></i>
          <i></i>
        </div>

        <div className="eye"></div>
        <div className="eye"></div>
        <div className="mouth">
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
          <div className="lips"></div>
        </div>
      </div>

      <h1>Unfortunately, something has gone wrong.</h1>
      <p>
        We're unable to fulfill your request. Rest assured we have been notified
        and are looking into the issue. Please refresh your browser. If the
        error continues, please contact our{" "}
        <a href="#">support team</a>.
      </p>
    </div>
  );
}
