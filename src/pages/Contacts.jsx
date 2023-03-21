import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Grid, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { Loader } from 'components/Loader/Loader';
import ContactListImage from '../images/ContactListImage.jpg';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Typography variant="h3" component="h1" align="center" mb={3} mt={3}>
        Phonebook
      </Typography>

      <Grid
        mb={3}
        sx={{
          display: 'flex',
          flexWrap: { xs: 'wrap', sm: 'wrap', md: 'noWrap' },

          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item mb={3}>
          <ContactForm />
        </Grid>

        <Grid item sx={{ width: { xs: '100%', sm: '100%', md: 800 } }}>
          <Box
            sx={{
              backgroundImage: `url(${ContactListImage})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'black',
              backgroundAttachment: 'fixed',
              objectFit: 'cover',
              height: 600,
              width: '100%',
            }}
          >
            <Box p={3}>
              <Box
                mb={2}
                p={1}
                sx={{
                  background: 'white',
                  opacity: '0.5',
                }}
                borderRadius={2}
              >
                <Typography variant="h4" component="h2" align="center">
                  Contacts
                </Typography>
              </Box>
              <Filter />
              {isLoading && !error && <Loader />}
              <ContactList />
            </Box>
          </Box>
        </Grid>
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
