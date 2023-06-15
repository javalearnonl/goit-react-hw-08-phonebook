import { nanoid } from 'nanoid';
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue, setSerch } from 'redux/filter/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filterValue = useSelector(setFilterValue);
  const dispatch = useDispatch();
  const filterID = nanoid();
  return (
    <>
      <label htmlFor={filterID}>
        <TextField
          id="standard-multiline-flexible"
          label="Find contac by name"
          sx={{
            width:300,
          }}
          value={filterValue}
          multiline
          maxRows={4}
          variant="standard"
          onChange={e => dispatch(setSerch(e.target.value))}
          
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
