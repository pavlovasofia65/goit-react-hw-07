import css from './SearchBox.module.css'
import { setFilter } from '../../redux/filtersSlice'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function SearchBox() {
    const dispatch = useDispatch();
    const value = useSelector(state => state.filters.search)
    const handleChange = evt => {
        dispatch(setFilter(evt.target.value));
    };

    return(
    <div className={css.find}>
        <p className={css.text}>Find contacts by name</p>
        <input className={css.input} type="text" value={value} onChange={handleChange}/>
    </div>);
}