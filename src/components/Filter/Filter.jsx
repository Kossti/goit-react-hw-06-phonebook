import React from 'react';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.contacts);

  const handleChange = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.fiterLabel}>Find contacts by name</label>
      <input
        className={css.fiterInput}
        type="text"
        value={filter}
        name="filter"
        id=""
        onChange={handleChange}
      />
    </div>
  );
};
export default Filter;
