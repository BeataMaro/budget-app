import React from 'react';
// import { promises as fsPromises } from 'fs';
// import { join } from 'path';
import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import ExpensesTable from './pages/ExpensesTable/ExpensesTable.tsx';
import Reports from './pages/Reports/Reports.tsx';
import Settings from './pages/Settings/Settings.tsx';
import Profile from './pages/Profile/Profile.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import * as expenses from '../data.json';

const routes: RouteObject[] = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/expenses',
        element: <ExpensesTable state={expenses.expenses} />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/reports',
        element: <Reports />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/settings',
        element: <Settings />,
        errorElement: <ErrorPage />,
      },
    ],
  },
];

export default routes;
