import {Box, Paper, Typography } from '@mui/material';

export default function Profile() {
  return (
    <Paper
      component='section'
      id='profileSection'
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        py: 4,
        my: 4,
      }}
    >
      <Typography variant='h5' sx={{ my: 3}} component='h2'>
        Profile
      </Typography>
      <Box
        component='img'
        sx={{
          borderRadius: '2px',
          mt: 6,
          transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
          '&:hover': {
            transform: 'scale(1.1)',
          },
        }}
        src='./src/assets/undraw_personal_info_re_ur1n.svg'
        alt='User'
      />
    </Paper>
  );
}
