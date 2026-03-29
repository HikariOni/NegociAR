import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { CreateBusiness } from './pages/CreateBusiness';
import { Onboarding } from './pages/Onboarding';
import { BusinessDashboard } from './pages/BusinessDashboard';
import { BusinessProfile } from './pages/BusinessProfile';
import { Contracts } from './pages/Contracts';

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/business" element={<CreateBusiness />} />
          <Route path="/profile" element={<div className="p-10 text-center mono">Perfil de Usuario (Próximamente)</div>} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/business-dashboard" element={<BusinessDashboard />} />
          <Route path="/business/:id" element={<BusinessProfile />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
  );
}

export default App;
