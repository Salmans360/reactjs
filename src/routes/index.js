import React, { lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import { AuthLayout } from '../components/AuthLayout/AuthLayout';
import PublicRoutesLayout from '../components/PublicRoutesLayout/PublicRoutesLayout';
import PrivateRoutesLayout from '../components/PrivateRoutesLayout/PrivateRoutesLayout';

const Dashboard = lazy(() => import('../pages/Dashboard'));
const ProfileSetting = lazy(() => import('../pages/ProfileSetting'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Signup = lazy(() => import('../pages/Signup'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      {/* Public Routes */}

      <Route element={<PublicRoutesLayout />}>
        <Route path='/signin' exac element={<SignIn />} />
        <Route path='/register' exac element={<Signup />} />
        <Route path='/' exac element={<SignIn />} />
        <Route path='/*' element={<NotFound />} />
      </Route>

      {/* Private Routes */}

      <Route element={<PrivateRoutesLayout />}>
        <Route path='/dashboard' exac element={<Dashboard />} />
        <Route path='/user-profile' exac element={<ProfileSetting />} />
      </Route>
    </Route>,
  ),
);
export default Routes;
