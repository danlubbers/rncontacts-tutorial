import React from 'react';
import {useRoute} from '@react-navigation/native';
import ContactDetailsComponent from '../components/ContactDetails/ContactDetails';

const ContactDetails = () => {
  const {params} = useRoute();

  return <ContactDetailsComponent contactDetails={params.item} />;
};

export default ContactDetails;
