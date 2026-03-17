import { Routes, Route } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Home from '../pages/Home';
import Analysis from '../pages/Analysis';
import AnalysisResult from '../pages/AnalysisResult';
import AcquireLinks from '../pages/AcquireLinks';
import Cart from '../pages/Cart';
import KeywordAnalyzer from '../pages/KeywordAnalyzer';
import AiAnalyzer from '../pages/AiAnalyzer';
import AiKeywordAnalyzer from '../pages/AiKeywordAnalyzer';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis-result" element={<AnalysisResult />} />
        <Route path="/acquire-links" element={<AcquireLinks />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/keyword-analyzer" element={<KeywordAnalyzer />} />
        <Route path="/ai-analyzer" element={<AiAnalyzer />} />
        <Route path="/ai-keyword-analyzer" element={<AiKeywordAnalyzer />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}
