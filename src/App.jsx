import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { supabase } from "./supabaseClient";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Code Splitting: Lazy load semua halaman untuk performa awal yang lebih cepat
const HomePage = lazy(() => import("./pages/HomePage/"));
const ActivityPage = lazy(() => import("./pages/ActivittyPage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const AdminStudio = lazy(() => import("./pages/AdminStudio"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// --- PROTECTED ROUTE: Hanya untuk Admin yang SUDAH Login ---
function ProtectedRoute({ children, session }) {
  if (session === undefined)
    return (
      <div className="p-8 text-center font-body text-muted">
        Memuat sesi keamanan...
      </div>
    );
  return session ? children : <Navigate to="/login" replace />;
}

// --- 1. PUBLIC ROUTE FIX: Hadang user yang SUDAH login agar tidak bisa ke /login ---
function PublicRoute({ children, session }) {
  if (session === undefined)
    return (
      <div className="p-8 text-center font-body text-muted">
        Memuat verifikasi...
      </div>
    );
  return !session ? children : <Navigate to="/dashboard" replace />;
}

function App() {
  const location = useLocation();
  const [session, setSession] = useState(undefined);
  const privateKeywords = ["studio", "login", "dashboard"];

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isPrivatePath = privateKeywords.some((keyword) =>
    location.pathname.includes(keyword),
  );

  return (
    <div className="min-h-screen bg-light flex flex-col justify-between">
      {!isPrivatePath && <Navbar />}

      <main className="flex-grow">
        <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center bg-light"><div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aktifitas" element={<ActivityPage />} />
          <Route path="/pendaftaran" element={<RegistrationPage />} />

          {/* FIX NO 1: Bungkus LoginPage dengan PublicRoute */}
          <Route
            path="/login"
            element={
              <PublicRoute session={session}>
                <LoginPage />
              </PublicRoute>
            }
          />

          {/* RUTE UTAMA DASHBOARD */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute session={session}>
                <DashboardPage />
              </ProtectedRoute>
            }
          />

          <Route path="/studio/*" element={<AdminStudio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>

      {!isPrivatePath && <Footer />}
    </div>
  );
}

export default App;
