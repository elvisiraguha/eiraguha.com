import React from 'react';
import { Stack } from '@chakra-ui/react';
import { ContactMe, OnTheInternet } from '../components';
import Sidebar from '../components/Layout';
import { Helmet } from 'react-helmet';

const Connect = () => {
  return (
    <Sidebar>
      <Helmet>
        <script type="application/ld+json">
          {`
        {
          "@context": "https://eiraguha.com",
          "@type": "Individual",
          "url": "https://eiraguha.com",
          "name": "Elvis iraguha",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+250783984662",
            "contactType": "Perrsonal Contacts"
          }
        }
      `}
        </script>
      </Helmet>
      <Stack
        height="100vh"
        direction={['column', 'column', 'column', 'row', 'row']}
        justify="space-between"
      >
        <ContactMe />
        <OnTheInternet />
      </Stack>
    </Sidebar>
  );
};

export default Connect;
