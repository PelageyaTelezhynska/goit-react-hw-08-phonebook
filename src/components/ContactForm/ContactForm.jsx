import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Container, Grid, Typography, Button } from '@mui/material';
import Textfield from '../Common/TextField';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

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

const ButtonWrapper = ({ children, ...otherProps }) => {
  const configButton = {
    variant: 'contained',
    type: 'submit',
    color: 'primary',
    fullWidth: true,
  };

  return <Button {...configButton}>{children}</Button>;
};

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        element => element.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts`);
    } else {
      dispatch(addContact(values));
    }
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
              <Typography variant="h4" component="h3" align="center">
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
              <ButtonWrapper>Add contact</ButtonWrapper>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Container>
  );
};

// import { useSelector, useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
// import { Formik, ErrorMessage } from 'formik';
// import * as yup from 'yup';
// import styled from 'styled-components';
// import { StyledForm, Label, StyledField, Button } from './ContactForm.styled';
// import { selectContacts } from 'redux/selectors';
// import { addContact } from 'redux/operations';

// const ErrorText = styled.div`
//   padding: 8px;
//   margin-top: 8px;
//   color: #ef4827;
// `;

// const nameInputId = nanoid();
// const numberInputId = nanoid();
// const initialValues = {
//   name: '',
//   number: '',
// };
// const schema = yup.object().shape({
//   name: yup.string().required(),
//   number: yup.string().required(),
// });

// export const ContactForm = () => {
//   const contacts = useSelector(selectContacts);
//   const dispatch = useDispatch();

//   const handleSubmit = (values, { resetForm }) => {
//     if (
//       contacts.find(
//         element => element.name.toLowerCase() === values.name.toLowerCase()
//       )
//     ) {
//       alert(`${values.name} is already in contacts`);
//     } else {
//       dispatch(addContact(values));
//     }
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <StyledForm>
//         <Label htmlFor={nameInputId}>
//           Name
//           <StyledField
//             type="text"
//             id={nameInputId}
//             name="name"
// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//           <ErrorMessage
//             name="name"
//             render={message => <ErrorText>{message}</ErrorText>}
//           />
//         </Label>
//         <Label htmlFor={numberInputId}>
//           Number
//           <StyledField
//             type="tel"
//             name="number"
//             id={numberInputId}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//           <ErrorMessage
//             name="number"
//             render={message => <ErrorText>{message}</ErrorText>}
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </StyledForm>
//     </Formik>
//   );
// };
