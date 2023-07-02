import Form from './Form/Form';
import FilterContacts from './FilterContacts/FilterContacts';
import ContactsList from './ContactsList/ContactsList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export function App() {
  console.log(useSelector(getContacts));
  const { items, isLoading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <div className={css.main}>
        <h2>Phonebook</h2>
        <Form />
      </div>
      <div className={css.main}>
        <h2>Contacts</h2>
        {items.length === 0 ? <span>Phonebook is still empty</span> : <FilterContacts />}
        {isLoading === true && <span>Loading, please wait...</span>}
        <ContactsList />
        {error !== null && <span>Oops, try again</span>}
      </div>
    </>
  );
}
