import React from 'react';
// import PropTypes from 'prop-types';
import css from './ContactsList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

export default function ContactsList() {
  const dispatch = useDispatch();

  const filterValue = useSelector(state => state.filter);

  const filteredContacts = useSelector(state => {
    if (filterValue) {
      return state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase().trim())
      );
    } else {
      return state.contacts;
    }
  });

  const handleSubmit = event => {
    dispatch(removeContact(event));
  };

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contactsItem} key={contact.id}>
            <div className={css.contactsName}>
              <span>{contact.name}</span>
            </div>
            <div className={css.contactsNumber}>
              <span>{contact.number}</span>
            </div>
            <div>
              <button
                className={css.contactsButton}
                type="button"
                onClick={() => handleSubmit(contact.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
      {/* {contacts.length === 0 && savedLocalContacts > 0 && (
        <li className={css.contactsItem}>No contact found in the phonebook!</li>
      )} */}
    </ul>
  );
}

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
//   contactToDelete: PropTypes.func,
// }.isRequired;
