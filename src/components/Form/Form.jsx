import React from 'react';

import PropTypes from 'prop-types';
import { setContactsValue } from 'redux/contacts/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { addContactsThunk } from 'redux/contacts/contacts.thunk';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';



export const Form = () => {
  const contacts = useSelector(setContactsValue);
  const dispatch = useDispatch();

  const handelSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const includeName = contacts.find(user => user.name === data.get('name'));
    if (includeName) {
      alert(`${data.get('name')} is already in contacs`);
    } else {
      dispatch(
        addContactsThunk({ name: data.get('name'), number: data.get('number') })
      );
      form.reset();
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          helperText="Please enter name"
          id="demo-helper-text-aligned"
          label="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <TextField
          helperText="Please enter number "
          id="demo-helper-text-aligned-no-helper"
          label="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            height: 56,
          }}
          type="submit"
          endIcon={<SendIcon />}
        >
          ADD
        </Button>
      </Box>
    </form>
  );
};

Form.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
