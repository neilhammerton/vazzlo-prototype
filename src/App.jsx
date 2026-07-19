// HashRouter (routes like /#/login) so GitHub Pages needs no server-side routing config.
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { font } from './theme/tokens';
import { ThemeProvider, useTheme, themeVars } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import CustomerHome from './pages/CustomerHome';
import CustomerSignup from './pages/CustomerSignup';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';
import AffiliateHome from './pages/AffiliateHome';
import AffiliateSignup from './pages/AffiliateSignup';
import AffiliateDashboard from './pages/AffiliateDashboard';

// Monolith page strings ↔ routes (affLogin/custLogin unify into /login)
const pageToRoute = {
  home: '/',
  signup: '/signup',
  login: '/login',
  affLogin: '/login',
  custLogin: '/login',
  custDash: '/dashboard',
  affiliate: '/affiliate',
  affSignup: '/affiliate/signup',
  affDash: '/affiliate/dashboard',
};

const routeToPage = {
  '/': 'home',
  '/signup': 'signup',
  '/login': 'login',
  '/dashboard': 'custDash',
  '/affiliate': 'affiliate',
  '/affiliate/signup': 'affSignup',
  '/affiliate/dashboard': 'affDash',
};

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const current = routeToPage[location.pathname] ?? 'home';
  const onNavigate = (page) => navigate(pageToRoute[page] ?? '/');

  return (
    <div style={{ ...themeVars[theme], minHeight: '100vh', background: 'var(--vz-bg)', color: 'var(--vz-heading)', fontFamily: font, WebkitFontSmoothing: 'antialiased' }}>
      <Navbar onNavigate={onNavigate} current={current} />
      <Routes>
        <Route path="/" element={<CustomerHome />} />
        <Route path="/signup" element={<CustomerSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/affiliate" element={<AffiliateHome />} />
        <Route path="/affiliate/signup" element={<AffiliateSignup />} />
        <Route path="/affiliate/dashboard" element={<AffiliateDashboard />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </HashRouter>
  );
}
