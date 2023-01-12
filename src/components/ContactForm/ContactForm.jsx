import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { StyledForm, Label, StyledField, Button } from './ContactForm.styled';

const ErrorText = styled.div`
  padding: 8px;
  margin-top: 8px;
  color: #ef4827;
`;

const nameInputId = nanoid();
const numberInputId = nanoid();
const initialValues = {
  name: '',
  number: '',
};
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});
export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label htmlFor={nameInputId}>
          Name
          <StyledField
            type="text"
            id={nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage
            name="name"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Label>
        <Label htmlFor={numberInputId}>
          Number
          <StyledField
            type="tel"
            name="number"
            id={numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            render={message => <ErrorText>{message}</ErrorText>}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
