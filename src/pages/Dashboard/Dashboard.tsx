import React from 'react';
import {
  Box, experimentalStyled, Paper, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomButton from '../../components/CustomButton/CustomButton.tsx';
import ChartIcon from '../../assets/undraw_analysis_chartIcon.tsx';
import DroneIcon from '../../assets/undraw_flying_droneIcon.tsx';
import TripIcon from '../../assets/undraw_tripIcon.tsx';

const DashboardCard = experimentalStyled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  cursor: 'pointer',

  '& > svg': {
    transform: 'scale(.7)',
    transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
    cursor: 'pointer',
  },

  '&:hover svg': {
    transform: 'scale(1)',
  },
}));

export default function Dashboard() {
  return (
    <Box
      component="section"
      id="dashboardSection"
      sx={{
        mt: { xs: '12rem', xl: '10rem' },
        px: { xs: 5, xl: 10 },
      }}
    >
      <Grid container spacing={2} columns={6}>
        <Grid item sm={6} md={3} xl={2} display="flex" justifyContent="center">
          <DashboardCard>
            <Typography variant="h4">Statistics</Typography>
            <ChartIcon />
            <CustomButton url="/reports">See more</CustomButton>
          </DashboardCard>
        </Grid>
        <Grid item sm={6} md={3} xl={2} display="flex" justifyContent="center">
          <DashboardCard>
            <Typography variant="h4">Expenses</Typography>
            <DroneIcon />
            <CustomButton url="/expenses">See more</CustomButton>
          </DashboardCard>
        </Grid>
        <Grid item sm={6} md={6} xl={2} display="flex" justifyContent="center">
          <DashboardCard>
            <Typography variant="h4">
              Multiply your savings and make your dreams come true
            </Typography>
            <TripIcon />
            <CustomButton url="/profile">See more</CustomButton>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
}
