import React from 'react';
import {
  Box, experimentalStyled, Paper, Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import CustomButton from '../../components/CustomButton/CustomButton.tsx';

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

  '&:hover img': {
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
            <Box
              component="img"
              sx={{
                objectFit: 'cover',
                transform: 'scale(.7)',
                transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
              }}
              src="./src/assets/undraw_analysis_dq08.svg"
              alt="chart"
            />
            <CustomButton url="/reports">See more</CustomButton>
          </DashboardCard>
        </Grid>
        <Grid item sm={6} md={3} xl={2} display="flex" justifyContent="center">
          <DashboardCard>
            <Typography variant="h4">Expenses</Typography>
            <Box
              component="img"
              sx={{
                objectFit: 'contain',
                transform: 'scale(.7)',
                transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
              }}
              src="./src/assets/undraw_flying_drone_u3r2.svg"
              alt="woman controlling a drone"
            />
            <CustomButton url="/expenses">See more</CustomButton>
          </DashboardCard>
        </Grid>
        <Grid item sm={6} md={6} xl={2} display="flex" justifyContent="center">
          <DashboardCard>
            <Typography variant="h4">
              Multiply your savings and make your dreams come true
            </Typography>
            <Box
              component="img"
              sx={{
                objectFit: 'contain',
                transform: 'scale(.7)',
                transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
              }}
              src="./src/assets/undraw_trip_re_f724.svg"
              alt="man and woman sitting on the top of a car"
            />
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
}
