import React, { useContext } from 'react'
import SayacContext from '../context/SayacContext'
import ContactSubPage from './ContactSubPage'


function ContactPage() {

    const { setSayac, sayac} = useContext(SayacContext)

    console.log('Contact Page rendered!!');

    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={() => setSayac(sayac - 1)}>Descrease</button>
            <ContactSubPage></ContactSubPage>
        </div>
    )
}

export default ContactPage
