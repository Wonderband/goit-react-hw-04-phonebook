import PropTypes from "prop-types";
import { ListItem } from "./ListItem/ListItem";

export const ContactList = ({ filter, contacts, onDelete }) => { 
    return (
       <ul>
            {contacts.filter(item => item.name.toLowerCase().includes(filter))
                .map(item => {
                    return (<ListItem key={item.id} id={item.id} name={item.name}
                        number={item.number} onDelete={onDelete} />)
                })
            }
        </ul> 
    )
}

ContactList.propTypes = {    
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }
    )),
}

