import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const mokaAPI = axios.create({
//   baseURL: 'https://63f494a43f99f5855db2b886.mockapi.io/api',
// });

export const getContactsThunk = createAsyncThunk('contacts', async () => {
  const { data } = await axios.get('/contacts');
  return data;
});

export const deleteContactsThunk = createAsyncThunk(
  'contacts/delteContact',
  async id => {
    const { data } = await axios.delete(`/contacts/${id}`);
    return data;
  }
);
export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact) => {
    const { data } = await axios.post('/contacts', { ...contact });
    return data;
  }
);


