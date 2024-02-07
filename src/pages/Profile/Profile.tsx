import React from 'react';
import {
  Paper, Typography,
} from '@mui/material';
import GameIcon from '../../assets/undraw_gameIcon.tsx';

export default function Profile() {
  return (
    <Paper
      component="section"
      id="profileSection"
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        py: 4,
        my: 4,
      }}
    >
      <Typography variant="h5" sx={{ my: 3 }} component="h2">
        Profile
      </Typography>
      <GameIcon />

    </Paper>
  );
}
