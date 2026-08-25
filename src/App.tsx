import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthProvider } from './lib/AuthContext';
import { Auth } from './pages/Auth';
import { BrandGuidelines } from './pages/BrandGuidelines';
import { ClientDashboard } from './pages/ClientDashboard';
import { Landing } from './pages/Landing';
import { Order } from './pages/Order';
import { PlantDetail } from './pages/PlantDetail';
import { AdminCamera } from './pages/admin/AdminCamera';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminPlant } from './pages/admin/AdminPlant';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/charte" element={<BrandGuidelines />} />
          <Route path="/" element={<Layout><Landing /></Layout>} />
          <Route path="/commander" element={<Layout><Order /></Layout>} />
          <Route path="/connexion" element={<Layout><Auth /></Layout>} />
          <Route
            path="/mon-jardin"
            element={
              <Layout>
                <ProtectedRoute>
                  <ClientDashboard />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/plante/:id"
            element={
              <Layout>
                <ProtectedRoute>
                  <PlantDetail />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <ProtectedRoute role="marin">
                  <AdminDashboard />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/admin/plante/:id"
            element={
              <Layout>
                <ProtectedRoute role="marin">
                  <AdminPlant />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/admin/camera"
            element={
              <Layout>
                <ProtectedRoute role="marin">
                  <AdminCamera />
                </ProtectedRoute>
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
