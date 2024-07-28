import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/profile', component: Profile },
  { path: '/settings', component: Settings },
];

export default routes;