import React, { useState, useEffect } from "react";
import './App.css';
import Contacts from "./components/Contacts";

export default function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fetch("https://randomuser.me/api?results=25")
    .then((response) => response.json())
    .then((data) => {
      setContacts(data.results)

    })
  
  }, []);
  
  return (
    <div className="App">
      <ul className='contacts'>
        {contacts.map((friend) => {
          return <Contacts data = {friend} />

        })}
        </ul>
    </div>
  );
}



