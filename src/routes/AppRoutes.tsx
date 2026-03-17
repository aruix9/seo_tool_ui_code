import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import Register from '../pages/Auth/Register';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<div className="p-8 text-center">Login Page Placeholder</div>} />
        {/* Redirect root to register for this demo */}
        <Route path="/" element={<Navigate to="/register" replace />} />
      </Route>
    </Routes>
  );
}
