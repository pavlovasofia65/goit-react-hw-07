import Contact from "./Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList({ onDelete }) {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.search);
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
    <div className={css.contacts}>
        {filteredContacts.map(cont => 
        <Contact key = {cont.id} contact = {cont} onDelete={onDelete}></Contact>)}
    </div>);
}