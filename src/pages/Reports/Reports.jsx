import { Box, Paper, Typography } from '@mui/material';

export default function Reports() {
  return (
    <Paper
      component='section'
      id='reportsSection'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        py: 4,
        mt: 6,
      }}
    >
      <Box
        component='img'
        sx={{
          borderRadius: '2px',
          transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
        src='./src/assets/undraw_team_up_re_84ok.svg'
        alt='Woman and man sitting on the charts'
      />
      <Typography variant='h5' sx={{ my: 3 }} component='h2'>
        Reports
      </Typography>
    </Paper>
  );
}
