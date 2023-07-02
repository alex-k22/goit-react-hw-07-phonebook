import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import css from '../Form/Form.module.css';
import { getFilterValue } from 'redux/selectors';

const FilterContacts = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);

  const onChange = event => {
    dispatch(addFilter(event.target.value));
  };
  return (
    <>
    <p>Find contacts by name</p>
    <input
      className={css.input}
      type="text"
      name="filter"
      title="Write you request here"
      required
      value={filterValue}
      onChange={onChange}
    />
  </>
  )

};


  export default FilterContacts;