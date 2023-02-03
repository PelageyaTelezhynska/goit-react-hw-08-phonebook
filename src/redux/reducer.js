import { createReducer } from '@reduxjs/toolkit';
import initialContacts from '../initialContacts.json';
import { addContact, deleteContact, changeFilter } from './actions';

const contactsInitialState = initialContacts;
const filterInitialState = '';

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

export const filterReducer = createReducer(filterInitialState, {
  [changeFilter]: (state, action) => {
    return action.payload;
  },
});

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'filter/changeFilter': {
//       return { ...state, filter: action.payload };
//     }
//     default:
//       return state;
//   }
// };
