import PropTypes from 'prop-types';
import css from './ListItem.module.css';

export const ListItem = ({ id, name, number, onDelete }) => {
  const deleteContact = e => onDelete(id);
  return (
    <li className={css.liFlex}>
      {name} : {number}
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
