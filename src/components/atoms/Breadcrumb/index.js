import React from "react";
//import "./styles.scss";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <div className="breadcrumb-counter"></div>
      {
        <div className="breadcrumb-actions">
          <div className="breadcrumb-text">
            <p>Municipio </p>
          </div>
          <div className="breadcrumb-text">
            <p>&#62;</p>
          </div>
          <div className="breadcrumb-text">
            <p>Organismo</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Breadcrumb;
