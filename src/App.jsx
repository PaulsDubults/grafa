import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { I18nProvider } from '@/lib/i18n';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import Gramatvediba from './pages/services/Gramatvediba';
import GramatvedibaBusiness from './pages/services/GramatvedibaBusiness';
import GramatvedibaSelf from './pages/services/GramatvedibaSelf';
import Finanses from './pages/services/Finanses';
import FinansesBusiness from './pages/services/FinansesBusiness';
import FinansesSelf from './pages/services/FinansesSelf';
import Apmacibas from './pages/services/Apmacibas';
import KonsultacijasSelf from './pages/services/KonsultacijasSelf';
import Pricing from './pages/Pricing';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      navigateToLogin();
      return null;
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pakalpojumi/gramatvediba" element={<Gramatvediba />} />
      <Route path="/pakalpojumi/gramatvediba/uznemumiem" element={<GramatvedibaBusiness />} />
      <Route path="/pakalpojumi/gramatvediba/pasnodarbinatajiem" element={<GramatvedibaSelf />} />
      <Route path="/pakalpojumi/finanses" element={<Finanses />} />
      <Route path="/pakalpojumi/finanses/uznemumiem" element={<FinansesBusiness />} />
      <Route path="/pakalpojumi/finanses/pasnodarbinatajiem" element={<FinansesSelf />} />
      <Route path="/pakalpojumi/apmacibas" element={<Apmacibas />} />
      <Route path="/pakalpojumi/konsultacijas-pasnodarbinatajiem" element={<KonsultacijasSelf />} />
      <Route path="/cena" element={<Pricing />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <I18nProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            <AuthenticatedApp />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </I18nProvider>
  )
}

export default App