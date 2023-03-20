import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center">
        Phonebook
      </Typography>

      <Grid display="flex">
        <ContactForm />

        <Box>
          <Typography variant="h4" component="h2" align="center">
            Contacts
          </Typography>
          <Filter />
          {isLoading && !error && <Loader />}
          <ContactList />
        </Box>
      </Grid>
    </Container>
  );
}

// import { useEffect, lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import { GlobalStyle } from './GlobalStyle';
// import { Container } from './Container';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { selectIsLoading, selectError } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Container>
//       <GlobalStyle />
//       <h1>Phonebook</h1>
//   <ContactForm />
//   <h2>Contacts</h2>
//   <Filter />
//   {isLoading && !error && <p>Request in progress...</p>}
//   <ContactList />
//     </Container>
//   );
// };
