import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import ExpensesTable from './pages/ExpensesTable/ExpensesTable.tsx';
import Reports from './pages/Reports/Reports.tsx';
import Settings from './pages/Settings/Settings.tsx';
import Profile from './pages/Profile/Profile.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Dashboard />} errorElement={<ErrorPage />} />
      <Route path="/settings" element={<Settings />} errorElement={<ErrorPage />} />
      <Route path="/profile" element={<Profile />} errorElement={<ErrorPage />} />
      <Route path="/reports" element={<Reports />} errorElement={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/expenses" element={<ExpensesTable />} errorElement={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
