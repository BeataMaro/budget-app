import CustomButton from '../../components/CustomButton/CustomButton.jsx';
import { Box, experimentalStyled, Grid, Link, Paper, Typography } from "@mui/material"


const DashboardCard = experimentalStyled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  overflow: 'hidden',
}));

export default function Dashboard() {
  return (
    <Box
      component='section'
      id='dashboardSection'
      sx={{
        flexGrow: 1,
        mt: { desktop: '10rem' },
      }}
    >
      <Grid container spacing={{ mobile: 2, desktop: 4 }} columns={{ mobile: 6, desktop: 12 }}>
        <Grid item mobile={3} desktop={6}>
          <DashboardCard>
            <Typography variant='h4'>Statistics</Typography>
            <Box sx={{ cursor: 'pointer' }}>
              <Box
                component='img'
                sx={{
                  borderRadius: '2px',
                  my: 3,
                  transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                src='./src/assets/undraw_analysis_dq08.svg'
                alt='chart'
              />
            </Box>
            <CustomButton component={Link} to='/reports'>See more</CustomButton>
          </DashboardCard>
        </Grid>
        <Grid item mobile={3} desktop={6}>
          <DashboardCard>
          <Typography variant='h4'>Expenses</Typography>

            <Box sx={{ cursor: 'pointer' }}>
              <Box
                component='img'
                sx={{
                  borderRadius: '2px',
                  my: 2,
                  transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                src='./src/assets/undraw_flying_drone_u3r2.svg'
                alt='woman controlling a drone'
              />
            </Box>
            <CustomButton component={Link} to='/expenses'>See more</CustomButton>
          </DashboardCard>
        </Grid>
        <Grid item mobile={6} desktop={12}>
          <DashboardCard>
            <Typography variant='h4'>
              Multiply your savings and make your dreams come true
            </Typography>
            <Box sx={{ cursor: 'pointer', pt: 4 }}>
              <Box
                component='img'
                sx={{
                  borderRadius: '2px',
                  transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                src='./src/assets/undraw_trip_re_f724.svg'
                alt='man and woman sitting on the top of a car'
              />
            </Box>
          </DashboardCard>
        </Grid>
      </Grid>
    </Box>
  );
}
