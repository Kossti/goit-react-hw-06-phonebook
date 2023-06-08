import React from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
// import { useSelector, useDispatch } from 'react-redux';

export const App = () => {
  return (
    <div className={css.section}>
      <h1 className={css.sectionTitel}>Phonebook</h1>
      <ContactsForm />
      <h2 className={css.sectionTitel}>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};

//  default App;
