import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { Info, Button } from './ContactList.styled';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Info>
        {name}: {number}
      </Info>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
