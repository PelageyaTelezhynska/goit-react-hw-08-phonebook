import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, Grid, Typography, Button } from '@mui/material';
import { HowToReg } from '@mui/icons-material';
import Textfield from '../Common/TextField';
import { register } from 'redux/auth/operations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};
const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const ButtonWrapper = ({ children, ...otherProps }) => {
  const configButton = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    variant: 'contained',
    type: 'submit',
    color: 'secondary',
    fullWidth: true,
  };

  return (
    <Button {...configButton} endIcon={<HowToReg />}>
      {children}
    </Button>
  );
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h2"
                align="center"
                mb={2}
                mt={4}
              >
                Registration
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Textfield
                name="name"
                label="Username"
                type="text"
                placeholder="James Bond"
              />
            </Grid>

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
              <ButtonWrapper>Register</ButtonWrapper>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};
