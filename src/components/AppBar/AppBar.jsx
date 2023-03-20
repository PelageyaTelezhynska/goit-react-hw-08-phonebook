import { NavLink } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { ContactPhoneTwoTone } from '@mui/icons-material';

export const AppBarStyled = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <IconButton
            component={NavLink}
            to="/"
            size="large"
            edge="start"
            color="inherit"
            role={undefined}
            sx={{ mr: 2 }}
          >
            <ContactPhoneTwoTone />
          </IconButton>
          <Typography variant="h6" component="span">
            Phonebook
          </Typography>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
    // <header>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
};
