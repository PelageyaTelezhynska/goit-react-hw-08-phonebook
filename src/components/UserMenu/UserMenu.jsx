import { useDispatch } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Logout } from '@mui/icons-material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="body1"
        mr={2}
        sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}
      >
        Welcome, <b>{user.email}</b>
      </Typography>
      <Button
        ml={2}
        variant="contained"
        color="secondary"
        contrastText={'#EAE7DC'}
        onClick={() => dispatch(logOut())}
        endIcon={<Logout />}
      >
        <Typography
          component="span"
          sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
        >
          Logout
        </Typography>
      </Button>
    </Box>
  );
};
