import React from 'react'

import { Link } from '../styledComponents/Contact'

const ProfileLink = ({name,url,img})=>{
    return(

        <Link>
            <a href={(name==="Email"? "mailto:": "")+url}><img src={img} title={url}/></a>
            <p>{name}</p>
        </Link>
    )
}

export default ProfileLink