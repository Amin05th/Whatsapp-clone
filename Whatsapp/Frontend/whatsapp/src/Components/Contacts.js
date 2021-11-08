import React from 'react'
import { useContacts } from '../Context/ContactsProvider'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {

    const {contacts} =useContacts()

    return (
        <ListGroup variant = 'flush'>
            {contacts.map(contacts => (
               <ListGroup.Item key = {contacts.id}>
                   {contacts.name}
               </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
