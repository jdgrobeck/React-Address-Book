import React, { useState } from "react";
import "./Contacts.css"

const Contacts = (props) => {
    // const [contacts, setContacts] = useState([])
    const [isToggled, setIsToggled] = useState(false);

    return (
                    <li className="contact-info">
                    <img src={props.data.picture.thumbnail} alt={props.data.name.first} />
                    <p>{props.data.name.first} {props.data.name.last}</p>
                  
                    {isToggled ? <button className="details" onClick={() => setIsToggled(!isToggled)}>Hide Details</button> : <button className="details" onClick={() => setIsToggled(!isToggled)}>Show Details</button>}
                    
                    
                    {isToggled && (
                            <div>
                                <p>{props.data.location.street.number} {props.data.location.street.name}</p>
                                <p>{props.data.location.city}, {props.data.location.state}, {props.data.location.country} {props.data.location.postcode}</p>
                                <p>{props.data.phone}</p>
                                <p>{props.data.email}</p>
                            </div>
                        )}
                     </li>
                )
}

export default Contacts;

