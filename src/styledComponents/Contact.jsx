import React from 'react'
import styled from 'styled-components'
import { fonts } from './config'

const Link = styled.li`
    list-style: none;
    ${fonts.text}
    font-size: 2.1rem;
    img{
        width: 30%;
    }
`
const Contact = styled.div`
    ul{
        display: flex;
    }
`
export {Contact,Link}