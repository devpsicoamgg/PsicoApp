import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage/homePage';
import BasicDataForm from './components/basicDataForm/BasicDataForm';
import ClinicalHistory from './components/clinicalHistory/ClinicalHistory';
import Monitoring from './components/monitoring/Monitoring';
import Informs from './components/informs/Informs';
import EditAndDeleteDataForm from './components/editAndDelete/EditAndDelete';
import Settings from './components/settings/Settings';
import ROUTES from './routes/routesHelper';
import LogingForm from './components/loging/logingForm';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LogingForm />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.BASIC_DATA_FORM} element={<BasicDataForm />} />
        <Route path={ROUTES.CLINICALHISTORY} element={<ClinicalHistory />} />
        <Route path={ROUTES.MONITORING} element={<Monitoring />} />
        <Route path={ROUTES.INFORMS} element={<Informs />} />
        <Route path={ROUTES.BASIC_DATA_EDITING} element={<EditAndDeleteDataForm />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
      </Routes>

      
    </>
  );
}

export default App;