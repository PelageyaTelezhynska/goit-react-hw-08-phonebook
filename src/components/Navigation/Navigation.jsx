import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Tab, Tabs } from '@mui/material';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const [value, setValue] = useState('/');
  const { isLoggedIn } = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs
        variant="standart"
        value={value}
        to={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab
          component={NavLink}
          value="/"
          to="/"
          label="Home"
          sx={{ display: { xs: 'none', sm: 'flex', md: 'flex' } }}
        />
        {isLoggedIn && (
          <Tab
            component={NavLink}
            value="/contacts"
            to="/contacts"
            label="Contacts"
          />
        )}
      </Tabs>
    </Box>
  );
};

// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

// import { Box, Drawer, IconButton, Typography } from '@mui/material';
// import { Menu } from '@mui/icons-material';

// export const Navigation = () => {
//   const { isLoggedIn } = useAuth();
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   return (
//     <Box sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}>
//       <IconButton onClick={() => setIsDrawerOpen(true)} color="secondary">
//         <Menu />
//       </IconButton>
//       <Drawer
//         anchor="right"
//         open={isDrawerOpen}
//         onClose={() => setIsDrawerOpen(false)}
//       >
//         <Box p={2} width="250px">
//           <Typography variant="h6" textAlign="center">
//             Menu
//           </Typography>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };
