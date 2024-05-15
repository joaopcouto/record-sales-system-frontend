import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global.css';
import LandingPage from './pages/Landind/Landing';
import RegisterPage from './pages/Register/Register';
import LoginPage from './pages/Login/Login';
import HomePage from './pages/Home/Home';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoutes } from './utils/PrivateRoutes';
import NotFoundPage from './pages/Error/NotFound';
import CollectionPage from './pages/Collection/Collection';
import WalletPage from './pages/Wallet/Wallet';
import ProfilePage from './pages/Profile/Profile';

const AppRouter = () => {
  return (
      <Router>
          <Routes>
              <Route index path='/' element={<LandingPage />} />
              <Route path='*' element={<NotFoundPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/register' element={<RegisterPage />} />
              {/*Rotas privadas*/}
              <Route path='' element={<PrivateRoutes />}>
                <Route path='/home' element={<HomePage/>} />
                <Route path='/collection' element={<CollectionPage/>} />
                <Route path='/my-wallet' element={<WalletPage/>} />
                <Route path='/profile' element={<ProfilePage/>} />
              </Route>
          </Routes>
      </Router>
      
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Toaster position="top-right" toastOptions={{ duration: 2000 }}/>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.Fragment>,
)
