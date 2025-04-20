import css from './ContactForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { addContact } from '../../redux/contactsOps'
import { useDispatch } from 'react-redux';

export default function ContactForm() {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
        number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    });

    const inValues = {
        name:'',
        number:'',
    };

    const handleSubmit = (values, actions) => {
        dispatch(
            addContact({
            name: values.name,
            phone: values.number,
        }))
        actions.resetForm();
    }
    return(
    <Formik
    initialValues={inValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}>
        <Form className={css.addForm}>
            <label htmlFor='name'>Name</label>
            <Field type='text' name='name' id='name' className={css.input}></Field>
            <ErrorMessage name='name' component='span'></ErrorMessage>

            <label htmlFor='number'>Number</label>
            <Field type='text' name='number' id='number' className={css.input}></Field>
            <ErrorMessage name='number' component='span'></ErrorMessage>

            <button type='submit' className={css.btn}>Submit</button>
        </Form>
    </Formik>);
}