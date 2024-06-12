import { Box } from '@mui/material';

const GoogleMap = () => {
  return (
    <Box sx={{ width: '100%', height: '300px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.36798909649!2d-104.8894338248814!3d21.493301480274773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8427371f3682ed65%3A0x85689b97025a0483!2sCentro%20Quir%C3%BArgico%20San%20Rafael!5e0!3m2!1ses-419!2smx!4v1718230488826!5m2!1ses-419!2smx"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map CQSR"
      ></iframe>
    </Box>
  );
};

export default GoogleMap;
