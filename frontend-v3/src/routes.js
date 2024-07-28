import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import InvestmentTracker from './components/AdvancedFeatures/InvestmentTracker';
import NetWorthCalculator from './components/AdvancedFeatures/NetWorthCalculator';

const routes = [
  { path: '/', component: Dashboard, requiresAuth: true },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/profile', component: Profile, requiresAuth: true },
  { path: '/settings', component: Settings, requiresAuth: true },
  { path: '/investments', component: InvestmentTracker, requiresAuth: true },
  { path: '/networth', component: NetWorthCalculator, requiresAuth: true },
];

export default routes;