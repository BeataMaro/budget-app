import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme.js';
import * as expenses from '../data.json';
import Layout from './components/Layout/Layout.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import ExpensesTable from './pages/ExpensesTable/ExpensesTable.jsx';
import Reports from './pages/Reports/Reports.jsx';
import Settings from './pages/Settings/Settings';
import Profile from './pages/Profile/Profile';
import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <CssBaseline />
      </RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
