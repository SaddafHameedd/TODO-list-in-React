import React, {useState, useEffect} from 'react';

import "./style.css"
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
export default function App(){
  const LOCAL_STORAGE_KEY='contacts'
  const [contacts,setContacts] = useState([]);

const addContactHandler=(contact)=>{
  console.log(contact);
  setContacts([...contacts,contacts])
}


useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
},[contacts])

  return (
    <div className="ui container">
      <Header/>
      <AddContact/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList  contacts={contacts}  />

</div>
  )
}