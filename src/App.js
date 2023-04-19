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


      //DO NOT DO THIS IN THE FUTURE lol. WAY TOO COMPLICATED. Use isToggled with useState like 

      // {isToggled && <p>information you want to show</p>}
      //   <button onClick={() => setIsToggled(!isToggled)}>Show More</button>

      // Array(data.results.length) creates a new array equal to the number of contacts in the fetched data, which is the length of the results array
      // New array is filled with false values
      // New array's initial state is all false values
    //   setMoreInfo(Array(data.results.length).fill(false))
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



