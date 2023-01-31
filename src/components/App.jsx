import { GlobalStyle } from './GlobalStyle';
import { Container } from './Container';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

// export const App = ({ initialContacts = [] }) => {
//   const [contacts, setContacts] = useState(() => {
//     return JSON.parse(localStorage.getItem('contacts')) ?? initialContacts;
//   });
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const formSubmitHandler = ({ name, number }) => {
//     if (
//       contacts.find(
//         element => element.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contacts`);
//     } else {
//       setContacts(prev => [...prev, { id: nanoid(), name, number }]);
//     }
//   };

//   const handleFilterChange = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const getFilteredContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const deleteContact = id => {
//     setContacts(prev => prev.filter(contact => contact.id !== id));
//   };

//   return (
//     <Container>
//       <GlobalStyle />
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={formSubmitHandler} />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={handleFilterChange} />
//       {contacts.length > 0 && (
//         <ContactList
//           contacts={getFilteredContacts()}
//           onDeleteContact={deleteContact}
//         />
//       )}
//     </Container>
//   );
// };

// App.propTypes = {
//   initialContacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
