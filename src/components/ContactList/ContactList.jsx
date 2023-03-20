import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { ContactItem } from 'components/ContactList/ContactItem';
import { selectVisibleContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  if (visibleContacts.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={2} columns={1}>
      {visibleContacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Grid>
  );
};
