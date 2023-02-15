import { useSelector, useDispatch } from 'react-redux';
import { Label, StyledFilter } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <StyledFilter type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};
