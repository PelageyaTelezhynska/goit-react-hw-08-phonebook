import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <TextField
      label="Find contacts by name"
      variant="standard"
      fullWidth
      type="search"
      value={filter}
      onChange={handleFilterChange}
      sx={{
        mb: '1.5rem',
      }}
    />
  );
};
