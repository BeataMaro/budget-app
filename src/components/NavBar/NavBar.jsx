import { useState } from 'react';
import PropTypes from 'prop-types';

import { theme } from '../../theme.js';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Icon,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

const hoverStyles = {
  opacity: '0',
  transition: '.2s ease-out',
  textAlign: 'center',
  '&:hover': { opacity: '1' },
};

const drawerWidth = 260;
const navItems = [
  { title: 'Expenses', icon: 'dashboard', link: '/expenses', display: 'none' },
  { title: 'Reports', icon: 'monitoring', link: '/reports', display: 'none' },
  { title: 'Profile', icon: 'person_3', link: '/profile' },
  { title: 'Settings', icon: 'settings', link: '/settings' },
  { title: 'Log out', icon: 'logout', link: '/' },
];

NavBar.propTypes = {
  window: PropTypes.instanceOf(window.constructor),
};
export default function NavBar({ window }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box component='nav' onClick={handleDrawerToggle}>
      <Typography component={Link} href='/' variant='h6' sx={{ my: 2, fontWeight: 800 }}>
        <IconButton className='material-symbols-outlined'>savings</IconButton>
        Budget
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ title, icon, link }, idx) => (
          <ListItem key={idx}>
            <ListItemButton component={Link} to={link} sx={hoverStyles}>
              <ListItemText primary={title} />
            </ListItemButton>
            <ListItemIcon sx={{ cursor: 'pointer', ml: -5 }} className='material-symbols-outlined'>
              {icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component='header' sx={{ display: 'flex' }}>
      <AppBar component='nav' sx={{ px: 4, position: 'fixed' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
          <Icon
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { desktop: 'none' } }}
            className='material-symbols-outlined'
          >
            menu
          </Icon>
          <Box sx={{ display: 'flex', textDecoration: 'none' }} component={Link} href='/'>
            <IconButton className='material-symbols-outlined'>savings</IconButton>
            <Typography
              variant='h4'
              component='h1'
              sx={{
                flexGrow: 1,
                display: { mobile: 'none', desktop: 'block' },
                color: theme.palette.secondary.main,
              }}
            >
              Budget
            </Typography>
          </Box>
          <Box sx={{ display: { mobile: 'none', desktop: 'flex'} }}> 
            <List sx={{ display: { mobile: 'none', desktop: 'flex', justifyContent: 'center' } }}>
              {navItems.map(({ title, icon, link }, idx) => (
                <ListItem key={idx} sx={{ px: 0 }}>
                  <ListItemButton component={Link} to={link} sx={hoverStyles}>
                    <ListItemText primary={title} sx={{ mr: 3, whiteSpace: 'nowrap' }} />
                  </ListItemButton>
                  <ListItemIcon
                    sx={{ cursor: 'pointer', ml: -3 }}
                    className='material-symbols-outlined'
                  >
                    {icon}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { mobile: 'block', desktop: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
