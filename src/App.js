import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from './context/DarkModeContext';

// UI Components
import Header from './components/ui/Header';
import Footer from './components/sections/Footer';

// Pages and Sections
import Home from "./pages/Home";
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import FlyerProjects from './pages/FlyerProjects';
import LogoProjects from './pages/LogoProjects';
import UIProjects from './pages/UIProjects';

// Admin Components
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import UploadProject from "./components/admin/UploadProject";
import Login from "./pages/Login"; 
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col">
        <BrowserRouter>
          <Header />

          {/* Main content area that grows */}
          <main className="flex-grow">
            <Routes>
              {/* ✅ Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/flyers" element={<FlyerProjects />} />
              <Route path="/projects/logos" element={<LogoProjects />} />
              <Route path="/projects/ui" element={<UIProjects />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/login" element={<Login />} />

              {/* 🔐 Protected Admin Routes */}
              <Route
                path="/admin/dashboard"
                element={
                  <PrivateRoute>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/upload"
                element={
                  <PrivateRoute>
                    <UploadProject />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>

          {/* ✅ Footer shown on all pages */}
          <Footer />
        </BrowserRouter>
      </div>
    </DarkModeProvider>
  );
}

export default App;
