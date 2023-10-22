import { Component } from 'react';

import { Container } from './Container/Container';
import PhoneForm from './PhoneForm/PhoneForm';
import { Title } from './Title/Title';

export class App extends Component {
  render() {
    return (
      <>
        <Container>
          <Title title="Phonebook" />
          <PhoneForm />
        </Container>
        <Container>
          <Title title="Search" />
        </Container>
        <Container>
          <Title title="Contacts" />
        </Container>
      </>
    );
  }
}
