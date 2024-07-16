import React, { useState } from "react";
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', message: '',
        }
    )
    let name, value
    const data = (e) =>
        {
            name = e.target.name;
            value = e.target.value;
            setUser({...users, [name]: value})
        }
        const senddata = async (e) =>
            {
                const{Name, Email, Subject, message} = users
                e.preventDefault();
                const options = {
                    method: 'POST',
                    Headers: {
                        'content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        Name, Email, Subject, message
                    })
                }
                    const res = await fetch('https://saad-electronic-default-rtdb.firebaseio.com/message.json', options)
                    if(res)
                        {
                            alert("Your Message Sent")
                        }
                        else
                            {
                                alert("An error occured")
                            }
                }
           return(
        <>
        <div className='contact_container'>
        <div className='contant'>
            <h2># contact us</h2>
        <div className='form'>
        <form method='POST'>
            <input type='text' name='Name' value={users.Name} placeholder='Enter Your Full Name' required autoComplete='off' onChange={data}></input>
            <input type='email' name='Email' value={users.Email} placeholder='Enter Your Email' required autoComplete='off' onChange={data}></input>
            <input type='text' name='Subject' value={users.Subject} placeholder='Enter Your Subject' required autoComplete='off' onChange={data}></input>
            <textarea name='message' value={users.message} placeholder='Your message' required autoComplete='off' onChange={data}></textarea> 
            {
                isAuthenticated ?
                <button type='submit' onClick={senddata}>send</button>
                : <button type='submit' onClick={() => loginWithRedirect()}>login</button>
            }
        </form>
        </div>
        </div>
        </div>
        </>
    )
  }

  export default Contact