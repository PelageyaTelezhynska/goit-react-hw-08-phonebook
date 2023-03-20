import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <Button
        component={NavLink}
        to="/register"
        color="inherit"
        role={undefined}
      >
        Register
      </Button>
      <Button component={NavLink} to="/login" color="inherit" role={undefined}>
        Log In
      </Button>
      {/* <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Log In</NavLink> */}
    </div>
  );
};
