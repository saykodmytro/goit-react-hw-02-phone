import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';

import { Container } from './Container/Container';
import PhoneForm from './PhoneForm/PhoneForm';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    return (
      <>
        <Container title="Phonebook">
          <PhoneForm handleAddContact={this.handleAddContact} />
        </Container>
        <Container title="Search"></Container>
        <Container title="Contacts">
          <ContactList
            contacts={this.state.contacts}
            handleDelete={this.handleDelete}
          />
        </Container>
      </>
    );
  }
}
