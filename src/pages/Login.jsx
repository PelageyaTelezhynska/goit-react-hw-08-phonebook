import { Typography } from '@mui/material';
import { LoginForm } from 'components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <Typography variant="h4" component="h2" align="center" mb={2} mt={4}>
        Log In
      </Typography>
      <LoginForm />
    </>
  );
}
