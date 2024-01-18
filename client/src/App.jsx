import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage/homePage";
import BasicDataForm from "./components/basicDataForm/BasicDataForm";
import ClinicalHistory from "./components/clinicalHistory/ClinicalHistory";
import Monitoring from "./components/monitoring/Monitoring";
import Informs from "./components/informs/Informs";
import EditAndDeleteDataForm from "./components/editAndDelete/EditAndDelete";
import Settings from "./components/settings/Settings";
import ROUTES from "./routes/routesHelper";
import LogingForm from "./components/loging/LogingForm"; 
import Segmentation from "./components/Segmentation/Segmentation";
import Various from "./components/Various/Various";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"; 

function App() {
  return (
    <>

<Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.LOGIN} element={<LogingForm />} />
        <Route path={ROUTES.BASIC_DATA_FORM} element={<BasicDataForm />} />
        <Route path={ROUTES.CLINICALHISTORY} element={<ClinicalHistory />} />
        <Route path={ROUTES.MONITORING} element={<Monitoring />} />
        <Route path={ROUTES.INFORMS} element={<Informs />} />
        <Route path={ROUTES.BASIC_DATA_EDITING} element={<EditAndDeleteDataForm />}/>
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.SEGMENTATION} element={<Segmentation />} />
        <Route path={ROUTES.VARIOUS} element={<Various />} />
      </Routes>
    </>
  );
}

export default App;
