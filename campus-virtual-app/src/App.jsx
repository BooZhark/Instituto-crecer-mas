import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LMSLayout from './components/layout/LMSLayout';
import StudentDashboard from './views/StudentDashboard';
import CourseView from './views/CourseView';

import CalendarView from './views/CalendarView';
import MessagesView from './views/MessagesView';

const App = () => {
  return (
    <Router>
      <LMSLayout>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/course/:id" element={<CourseView />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/messages" element={<MessagesView />} />
        </Routes>
      </LMSLayout>
    </Router>
  );
};

export default App;
