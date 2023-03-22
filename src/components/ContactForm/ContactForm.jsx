// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, Grid, Typography, Button } from '@mui/material';
import { AddIcCall } from '@mui/icons-material';
import Textfield from '../Common/TextField';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
// import { Snackbar } from '../SnackBar/SnackBar';

const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  // const [success, setSuccess] = useState(false);
  // const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        element => element.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      // setMessage(`${values.name} is already in contacts`);
      // setSuccess(true);
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
      // setMessage(`${values.name} added to your phonebook`);
      // setSuccess(true);
    }
    resetForm();
    // setSuccess(false);
  };

  return (
    <>
      {' '}
      <Container maxWidth="sm">
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Grid container spacing={2} columns={1}>
              <Grid item xs={12}>
                <Typography variant="h4" component="h3" align="center" mb={2}>
                  Add your new contact here
                </Typography>
              </Grid>

              <Grid item xs={6}>
                <Textfield name="name" label="Name" placeholder="James Bond" />
              </Grid>

              <Grid item xs={6}>
                <Textfield
                  name="number"
                  label="Number"
                  placeholder="+380999614658"
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  fullWidth
                  endIcon={<AddIcCall />}
                >
                  Add contact
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        {/* {success ? <Snackbar message={message} /> : null} */}
      </Container>
    </>
  );
};
