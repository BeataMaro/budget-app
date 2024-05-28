import { Typography } from '@mui/material';
import React from 'react';

export default function ErrorPage() {
  return (
    <Typography
      variant="h5"
      sx={{
        display: 'flex', justifyContent: 'center', mt: 'auto',
      }}
    >
      Something went wrong.
    </Typography>
  );
}
