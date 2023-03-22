import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import PageNotFoundImg from '../images/PageNotFound.jpg';

export const PageNotFound = () => {
  return (
    <Box mt={4} mb={4}>
      <Box
        sx={{
          backgroundImage: `url(${PageNotFoundImg})`,
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
            width: '100%',
            padding: { xs: 3, sm: 2, md: 20 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'white',
              opacity: '0.8',
              padding: { xs: 3, sm: 2, md: 4 },
            }}
          >
            <Typography
              variant={'h3'}
              component="p"
              color="primary"
              align="center"
              mb={2}
            >
              404 <br />
              Page not found
            </Typography>

            <Typography variant="body1" align="center" mb={2}>
              The page you are looking for was moved, removed, renamed or might
              never existed
            </Typography>
            <Button
              component={NavLink}
              to="/"
              variant="contained"
              type="submit"
              color="secondary"
              align="center"
              endIcon={<Home />}
            >
              Go Home
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
