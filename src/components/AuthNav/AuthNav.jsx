import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { Menu, HowToReg, VpnKey } from '@mui/icons-material';

export const AuthNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}>
        <IconButton onClick={() => setIsDrawerOpen(true)} color="secondary">
          <Menu />
        </IconButton>
        <Drawer
          anchor="right"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="240px">
            <nav aria-label="main mailbox folders">
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to="/register"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <ListItemIcon>
                      <HowToReg />
                    </ListItemIcon>
                    <ListItemText primary="Register" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    component={NavLink}
                    to="/login"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <ListItemIcon>
                      <VpnKey />
                    </ListItemIcon>
                    <ListItemText primary="Log In" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
            <Divider />
          </Box>
        </Drawer>
      </Box>

      <Box
        sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}
        component="nav"
      >
        <Button
          component={NavLink}
          to="/register"
          color="inherit"
          role={undefined}
        >
          Register
        </Button>
        <Button
          component={NavLink}
          to="/login"
          color="inherit"
          role={undefined}
        >
          Log In
        </Button>
      </Box>
    </>
  );
};
