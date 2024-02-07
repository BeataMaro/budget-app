import React from 'react';
import { Paper, Typography } from '@mui/material';
import ReportsIcon from '../../assets/undraw_reportsIcon.tsx';

export default function Reports() {
  return (
    <Paper
      component="section"
      id="reportsSection"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        py: 4,
        mt: 6,
      }}
    >
      <ReportsIcon />
      <Typography variant="h5" sx={{ my: 3 }} component="h2">
        Reports
      </Typography>
    </Paper>
  );
}
