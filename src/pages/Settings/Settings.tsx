import { Box, Typography } from '@mui/material'

export default function Settings() {
  return (
    <Box
      component='section'
      id='settingsSection'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        py: 4,
        my: 4,
      }}
    >
      <Typography variant='h5' sx={{ my: 3}} component='h2'>
        Settings
      </Typography>
    </Box>
  );
}
