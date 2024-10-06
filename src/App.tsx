import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Dashboard from './pages/Dashboard';
import ForgotPassword from './pages/ForgotPassword';
import { Provider } from 'react-redux';
import store from '@/app/store';
import Home from '@/pages/Home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home>hello</Home>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
