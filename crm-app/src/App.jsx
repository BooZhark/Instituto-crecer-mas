import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CRMLayout from './components/layout/CRMLayout';
import Dashboard from './views/Dashboard';
import Pipeline from './views/Pipeline';
import Campaigns from './views/Campaigns';

const App = () => {
  return (
    <Router>
      <CRMLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pipeline" element={<Pipeline />} />
          <Route path="/campaigns" element={<Campaigns />} />
          {/* Placeholders */}
          <Route path="/contacts" element={<div className="text-center p-10 text-slate-500">Base de Contactos (Próximamente)</div>} />
        </Routes>
      </CRMLayout>
    </Router>
  );
};

export default App;
