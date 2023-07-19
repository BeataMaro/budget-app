import React from 'react';
import PropTypes, { object} from 'prop-types';
import ExpensesTable from './pages/ExpensesTable/ExpensesTable.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
// import Profile from './components/Profile/Profile.jsx';
// import Reports from './components/Reports/Reports.jsx';
// import Settings from './components/Settings/Settings.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Wrapper } from './theme.js';
import { Box } from '@mui/material';

App.propTypes = {
  state: PropTypes.arrayOf(object),
};

export default function App({ state }) {
  return (
    <>
      <Wrapper>
        {React.createElement(NavBar)}
        <Box component='main' sx={{ p: 3 }}>
          <Dashboard />
          {React.createElement(ExpensesTable, { state: state})}
        </Box>
      </Wrapper>
      <Footer />
    </>
  );
}
