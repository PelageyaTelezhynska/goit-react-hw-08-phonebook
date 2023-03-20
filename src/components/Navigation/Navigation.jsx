import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Button
        component={NavLink}
        to="/"
        color="inherit"
        variant="contained"
        role={undefined}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          color="inherit"
          role={undefined}
        >
          Contacts
        </Button>
      )}
      {/* <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
    </nav>
  );
};
