import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { Contacts } from '@mui/icons-material';

export const AppBarStyled = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar component="header" position="static">
      <Container>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <IconButton
              component={NavLink}
              to="/"
              size="large"
              edge="start"
              color="secondary"
              role={undefined}
              sx={{ mr: 2 }}
            >
              <Contacts />
            </IconButton>
            <Typography variant="h6" component="span" color="secondary">
              Phonebook
            </Typography>
          </Box>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
