import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, Grid, Button } from '@mui/material';
import { Login } from '@mui/icons-material';
import Textfield from '../Common/TextField';
import { logIn } from 'redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Grid container spacing={2} columns={1}>
            <Grid item xs={6}>
              <Textfield
                name="email"
                label="Email"
                type="email"
                placeholder="JamesBond@gmail.com"
              />
            </Grid>

            <Grid item xs={6}>
              <Textfield name="password" label="Password" type="password" />
            </Grid>
            <Grid item xs={6}>
              <Button
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                variant="contained"
                type="submit"
                color="secondary"
                fullWidth
                endIcon={<Login />}
              >
                Log In
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};
