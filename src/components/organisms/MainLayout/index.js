import React from "react";

import Sidebar from "components/molecules/Sidebar";
import BaseHeader from "components/atoms/BaseHeader";
import BodyofCards from "components/molecules/BodyofCards";
import Breadcrumb from "components/atoms/Breadcrumb";

import "./styles.scss";

const MainLayout = ({ showHeader = true, children }) => {
  return (
    <div
    <div className="desktop-main-layout-container">
      <Sidebar></Sidebar>
      <div className="right-layout-container">
        {showHeader && <BaseHeader></BaseHeader>}
        <Breadcrumb></Breadcrumb>
        <h3 className="h3-configuration">Configuracion</h3>
        <div>
          <BodyofCards></BodyofCards>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
