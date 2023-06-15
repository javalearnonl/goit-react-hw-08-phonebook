// import { Contacts } from "components/Contacts/Contacts";
import Contacts2 from "components/Contacts/Contacts2";
import { Filter } from "components/Filter/Filter";
import { Form } from "components/Form/Form";
import Typography from '@mui/material/Typography';


 const PhoneBook = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Create Contact
      </Typography>
      <Form />

      <Typography variant="h4" gutterBottom>
         Contacts
      </Typography>
      <Filter />
      <Contacts2 />
    </>
  );

};

export default PhoneBook;