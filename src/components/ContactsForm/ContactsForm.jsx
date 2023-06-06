import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, removeContact } from 'redux/contactSlice';
import { filterContact } from 'redux/filterSlice';
import css from './ContactsForm.module.css';

export default function ContactsForm() {
  const dispatch = useDispatch();
  const contactsValue = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ id: nanoid(6), name, number }));
    resetForm();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLable}>
        Name:
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={css.formLable}>
        Number:
        <input
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={css.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

// ContactsForm.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       number: PropTypes.string,
//       name: PropTypes.string,
//     })
//   ),
//   addContact: PropTypes.func.isRequired,
// }.isRequired;
