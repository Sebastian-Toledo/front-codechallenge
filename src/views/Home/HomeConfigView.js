import React from "react";
import MainLayout from "components/organisms/MainLayout";
import { withTranslation } from "react-i18next";

const PresuConfigView = () => {
  return (
    <MainLayout>
      <h1>Cards</h1>
    </MainLayout>
  );
};

export default withTranslation()(PresuConfigView);
