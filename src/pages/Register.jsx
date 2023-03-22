import { Typography } from '@mui/material';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <>
      <Typography variant="h4" component="h2" align="center" mb={2} mt={4}>
        Registration
      </Typography>
      <RegisterForm />
    </>
  );
}
