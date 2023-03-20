import { useDispatch } from 'react-redux';
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { Clear, Person } from '@mui/icons-material';

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { IconButton } from '@mui/material';
// import { Info, Button } from './ContactList.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <Grid item xs={8}>
      <Card sx={{ display: 'flex', alignItems: 'center' }}>
        <CardContent
          sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
        >
          <Person />
          <Typography variant="h6" component="h3" ml={2}>
            {name}
          </Typography>
          <Typography variant="body1" ml={2}>
            {number}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDelete}
          >
            <Clear />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
