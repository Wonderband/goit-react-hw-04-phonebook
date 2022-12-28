import PropTypes from "prop-types";

export const ListItem = ({ id, name, number, onDelete }) => {
    // console.log(id);
    const deleteContact = (e) => onDelete(id);    
    return (
    <li>                  
        {name}  {number}
        <button type='button' onClick={deleteContact}>Delete</button>
    </li>
    )    
}

ListItem.propTypes = {    
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
        
}



