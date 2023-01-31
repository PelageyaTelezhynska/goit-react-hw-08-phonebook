import initialContacts from '../initialContacts.json';

const initialState = {
  contacts: initialContacts,
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return { ...state, contacts: [...state.contacts, action.payload] };
    }
    case 'contacts/deleteContact': {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case 'filter/changeFilter': {
      return { ...state, filter: action.payload };
    }
    default:
      return state;
  }
};
