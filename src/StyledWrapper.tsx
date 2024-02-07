import { Paper, experimentalStyled } from '@mui/material';

const Wrapper = experimentalStyled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  minHeight: '100vh',
  margin: '0 auto',
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.secondary.main,
}));

export default Wrapper;
