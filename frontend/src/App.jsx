import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
                                      
import Services from  './pages/Services';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import Resource from './pages/Resource';
import AISupportBuddy from './pages/AISupportBuddy';
import { useAuth } from './pages/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Navigate to="/" replace /> : children;
}

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path='/services' element={<ProtectedRoute><Services /></ProtectedRoute>} />
        <Route path='/support' element={<ProtectedRoute><Support /></ProtectedRoute>} />
        <Route path='/contact' element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path='/chat' element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/resources' element={<Resource />} />
        <Route path='/ai-support' element={<AISupportBuddy />} />
        <Route path='*' element={<Navigate to={isAuthenticated ? '/' : '/login'} replace />} />
      </Routes>
    </Router>
  );
}

export default App;
