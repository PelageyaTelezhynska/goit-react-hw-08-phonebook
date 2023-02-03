import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactList/ContactItem';
import { Item } from './ContactList.styled';
import { getContacts, getFilter } from 'redux/selectors';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = getFilteredContacts(contacts, filter);

  if (visibleContacts.length === 0) {
    return null;
  }

  return (
    <ul>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          <ContactItem contact={contact} />
        </Item>
      ))}
    </ul>
  );
};
