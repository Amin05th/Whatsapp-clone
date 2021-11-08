import React, {useState} from 'react'
import {Modal, Form, Button} from 'react-bootstrap'
import {useContacts} from '../Context/ContactsProvider'
import {useConversations} from '../Context/ConversationsProvider'

export default function NewConversationModal({closeModal}) {
    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    const [selectedContactIds, setSelectedContactIds] = useState([])

    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevSelectedContactIds => {
            if(prevSelectedContactIds.includes(contactId)){
                return prevSelectedContactIds.filter(previd => {
                    return contactId !== previd
                })
            }else {
                return [...prevSelectedContactIds, contactId]
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {handleSubmit}>
                {contacts.map(contact => (
                    <Form.Group controlId = {contact.id} key = {contact.id}>
                        <Form.Check
                        type = 'checkbox'
                        value = {selectedContactIds.includes(contact.id)}
                        label = {contact.name}
                        onChange = {() => handleCheckboxChange(contact.id)}
                        />
                    </Form.Group>
                ))}
                <Button type = 'submit'> Create</Button>
                </Form>
            </Modal.Body>
        </>
    )
}
