import { Route, Routes, Link } from 'react-router-dom';
import AuthLogin from './AuthLogin';
import AuthSignup from './AuthSignup';

function AuthConfig() {
  return (
    <Routes>
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route
        path="/auth/signup"
        element={
         <AuthSignup/>
        }
      />
    </Routes>
  );
}

export default AuthConfig;
