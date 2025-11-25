import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SATLayout from './components/layout/SATLayout';
import Dashboard from './views/Dashboard';
import RiskMonitor from './views/RiskMonitor';

const App = () => {
  return (
    <Router>
      <SATLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/monitor" element={<RiskMonitor />} />
          {/* Placeholders for other routes */}
          <Route path="/reports" element={<div className="text-center p-10 text-slate-500">Módulo de Reportes (Próximamente)</div>} />
          <Route path="/settings" element={<div className="text-center p-10 text-slate-500">Configuración del Sistema</div>} />
        </Routes>
      </SATLayout>
    </Router>
  );
};

export default App;
