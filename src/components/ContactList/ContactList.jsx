import Contact from "./Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList({ onDelete }) {
    const filteredContacts = useSelector(selectFilteredContacts);
    return (
    <div className={css.contacts}>
        {filteredContacts.map(cont => 
        <Contact key = {cont.id} contact = {cont} onDelete={onDelete}></Contact>)}
    </div>);
}