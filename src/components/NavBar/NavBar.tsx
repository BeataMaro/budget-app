import React, { useState } from 'react';

import {
  AppBar,
  Box,
  Divider,
  Drawer,
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
import { theme } from '../../theme.tsx';

const hoverStyles = {
  opacity: '0',
  transition: '.2s ease-out',
  textAlign: 'center',
  '&:hover': { opacity: '1' },
};

const drawerWidth = 260;

interface INavItem {
 id: number,
 title: string,
 icon: string,
 link: string,
 display?: string,
}

const navItems: INavItem[] = [
  {
    id: 3432, title: 'Expenses', icon: 'dashboard', link: '/expenses', display: 'none',
  },
  {
    id: 78654, title: 'Reports', icon: 'monitoring', link: '/reports', display: 'none',
  },
  {
    id: 6532, title: 'Profile', icon: 'person_3', link: '/profile',
  },
  {
    id: 87754, title: 'Settings', icon: 'settings', link: '/settings',
  },
  {
    id: 936755, title: 'Log out', icon: 'logout', link: '/',
  },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box component="nav" onClick={handleDrawerToggle}>
      <Typography component={Link} href="/" variant="h6" sx={{ my: 2, fontWeight: 800 }}>
        <IconButton className="material-symbols-outlined">savings</IconButton>
        Budget
      </Typography>
      <Divider />
      <List>
        {navItems.map(({
          id, title, icon, link,
        }) => (
          <ListItem key={id}>
            <ListItemButton component={Link} href={link} sx={hoverStyles}>
              <ListItemText primary={title} />
            </ListItemButton>
            <ListItemIcon sx={{ cursor: 'pointer', ml: -5 }} className="material-symbols-outlined">
              {icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window.document.body : undefined;

  return (
    <Box component="header" sx={{ display: 'flex' }}>
      <AppBar component="nav" sx={{ px: 4, position: 'fixed' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={() => handleDrawerToggle}
            sx={{ mr: 2, display: { xl: 'none' } }}
            className="material-symbols-outlined"
          >
            menu
          </IconButton>
          <Box sx={{ display: 'flex', textDecoration: 'none' }} component={Link} href="/">
            <IconButton className="material-symbols-outlined">savings</IconButton>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', xl: 'block' },
                color: theme.palette.secondary.main,
              }}
            >
              Budget
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', xl: 'flex' } }}>
            <List sx={{ display: { xs: 'none', xl: 'flex', justifyContent: 'center' } }}>
              {navItems.map(({
                id, title, icon, link,
              }) => (
                <ListItem key={id} sx={{ px: 0 }}>
                  <ListItemButton component={Link} href={link} sx={hoverStyles}>
                    <ListItemText primary={title} sx={{ mr: 3, whiteSpace: 'nowrap' }} />
                  </ListItemButton>
                  <ListItemIcon
                    sx={{ cursor: 'pointer', ml: -3 }}
                    className="material-symbols-outlined"
                  >
                    {icon}
                  </ListItemIcon>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', xl: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
