import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },

  reducers: {
    addContact(state, action) {
      const contact = {
        id: nanoid(6),
        name: action.payload.name,
        number: action.payload.number,
      };
      state.contacts.push(contact);
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
