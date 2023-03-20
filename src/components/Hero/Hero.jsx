import { Box, Typography } from '@mui/material';
import HeroImage from '../../images/HeroImage.jpg';
const Hero = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 600,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '40%' },
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box
            sx={{
              background: 'white',
              opacity: '0.8',
              padding: { xs: 2, sm: 1, md: 3 },
            }}
          >
            <Typography
              variant={'h6'}
              component="h1"
              color="primary"
              align="center"
            >
              This application is an easy way to add new contacts to your own
              Phonebook.
            </Typography>
            <Typography variant="h4" align="center">
              How It Works
            </Typography>
            <Typography variant="body1" align="center">
              Phonebook is a software application that allows users to
              storelarge numbers of contact records efficiently. The system is
              designed to have functions such as adding, viewing, search and
              deleting contacts.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
