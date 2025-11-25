import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/auth/LoginPage';
import MainLayout from './components/layout/MainLayout';
import StudentDashboard from './views/StudentDashboard';
import TeacherDashboard from './views/TeacherDashboard';
import AdminDashboard from './views/AdminDashboard';

const DashboardLayout = ({ children }) => (
  <MainLayout>{children}</MainLayout>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/dashboard" element={
          <DashboardLayout>
            <StudentDashboard />
          </DashboardLayout>
        } />

        <Route path="/student" element={
          <DashboardLayout>
            <StudentDashboard />
          </DashboardLayout>
        } />

        <Route path="/teacher" element={
          <DashboardLayout>
            <TeacherDashboard />
          </DashboardLayout>
        } />

        <Route path="/admin" element={
          <DashboardLayout>
            <AdminDashboard />
          </DashboardLayout>
        } />

      </Routes>
    </Router>
  );
}

export default App;
