import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const changeFilter = value => {
  return {
    type: 'filter/changeFilter',
    payload: value,
  };
};

//   const handleFilterChange = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const deleteContact = id => {
//     setContacts(prev => prev.filter(contact => contact.id !== id));
//   };
