import { useSelector, useDispatch } from 'react-redux';
import { Label, StyledFilter } from './Filter.styled';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/actions';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <StyledFilter type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};
