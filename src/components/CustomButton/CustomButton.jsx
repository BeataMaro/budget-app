import PropTypes from 'prop-types';
import { theme } from '../../theme.js';
import { Button, Link } from '@mui/material';

const customButtonStyle = {
  boxShadow: 1,
  width: '200px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '1rem 1.8rem',
  fontSize: '1rem',
  fontWeight: '800',
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  minWidth: '200px',
  position: 'relative',
  zIndex: '1',
  overflow: 'hidden',

  '&:hover': {
    color: theme.palette.primary.onPrimary,

    '&::before': {
      transform: 'scale(149.5, 2.9)',
    },
  },

  '&::before': {
    content: '""',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: '1rem',
    bottom: '1rem',
    left: '0',
    width: '2px',
    transform: 'scale(1)',
    transformOrigin: 'left',
    zIndex: '-1',
    transition: 'transform 0.7s cubic-bezier(0.52, 1.64, 0.37, 0.66), color 0.4s',
  },
};

CustomButton.propTypes = {
  children: PropTypes.string,
  url: PropTypes.string,
};

export default function CustomButton({ children, url }) {
  return (
    <Button sx={customButtonStyle} component={Link} href={url}>
      {children}
    </Button>
  );
}
