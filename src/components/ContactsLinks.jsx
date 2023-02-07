import React from 'react'

import contactsLinks from '../assets/contactsLinks'
import ProfileLink from './ProfileLink'
import { Contact } from '../styledComponents/Contact'

const ContactsLinks = ()=>{
    const profileLinks = contactsLinks.map(info => {
        return <ProfileLink
        key = {info.name}
        name={info.name}
        url = {info.url}
        img = {info.img}
        />
    })
    
    return(
        <Contact>
            <ul>
                {profileLinks}
            </ul>
        </Contact>
    )
      
}

export default ContactsLinks