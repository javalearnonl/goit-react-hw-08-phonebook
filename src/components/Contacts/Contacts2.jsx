import * as React from 'react';
import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import Grid from '@mui/material/Grid';


import DeleteIcon from '@mui/icons-material/Delete';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

import { useSelector, useDispatch } from 'react-redux';
import { setfilterContacts, setIsLoading } from 'redux/contacts/contactsSlice';
import PropTypes from 'prop-types';
import {
  getContactsThunk,
  deleteContactsThunk,
} from 'redux/contacts/contacts.thunk';

import { BallTriangle } from 'react-loader-spinner';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Contacts2() {
  const contactLoading = useSelector(setIsLoading);
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContactsThunk(id));
  const filterContacts = useSelector(setfilterContacts);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      {contactLoading ? (
        <div className="loader">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#1976d2"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </div>
      ) : (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Demo>
                <List>
                  {filterContacts.map(({ id, name, number }) => {
                    return (
                      <ListItem
                        key={id}
                        secondaryAction={
                          <IconButton
                            edge="end"
                            aria-label="delete"
                            onClick={() => handleDelete(id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar>
                            <PermContactCalendarIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={name} secondary={number} />
                      </ListItem>
                    );
                  })}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
}

Contacts2.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
