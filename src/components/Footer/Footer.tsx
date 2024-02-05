import React from 'react';
import {
  Box, Link, Typography,
} from '@mui/material';
import { theme } from '../../theme.tsx';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: theme.spacing(3),
        justifySelf: 'flex-end',
        mt: 'auto',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.onSecondary,
      }}
    >
      <Typography variant="body2" color="#fff" align="center" gutterBottom>
        {'Copyright © '}
        <Link href="https://github.com/BeataMaro">
          Beata Maro
        </Link>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </Box>
  );
}
