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
        // indicatorColor="inherit"
      >
        <Tab component={NavLink} value="/" to="/" label="Home" />
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
