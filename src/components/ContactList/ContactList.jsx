import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactList/ContactItem';
import { Item } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

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
