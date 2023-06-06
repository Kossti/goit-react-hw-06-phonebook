// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
