import css from './Contact.module.css';
import { deleteContact } from '../../../redux/contactsOps'
import { useDispatch } from 'react-redux';

export default function Contact({contact}) {
    const dispatch = useDispatch();
    const onDelete = () => dispatch(deleteContact(contact.id));
    return(
    <div className={css.cont}>
        <div className={css.contactInfo}>
            <p className={css.contactInfoText}>👤 {contact.name}</p>
            <p className={css.contactInfoText}>📞 {contact.number}</p>
        </div>
        <button className={css.btn} onClick={onDelete}>Delete</button>
    </div>);
}