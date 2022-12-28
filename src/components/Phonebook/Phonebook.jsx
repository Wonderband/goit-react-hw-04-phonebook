import React, { Component } from "react";
import { Section } from "../Section/Section";
import { nanoid } from 'nanoid';
import { Filter } from "../Filter/Filter";
import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";

export class Phonebook extends Component {
    
  state = {  
    contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',   
  }  
  
  componentDidMount() { 
    const localContacts = localStorage.getItem('contacts');
    if (localContacts)
      this.setState({ contacts: JSON.parse(localContacts) });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) 
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));    
  }

  handleSubmit = (e) => { 
    e.preventDefault();    
    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase() === e.target.name.value.toLowerCase().trim())) { 
      alert(`${e.target.name.value} is already in contacts`);
      return;
    }    
    const newContact = {
      name: e.target.name.value.trim(),
      number: e.target.number.value,
      id: nanoid()
    };    
    this.setState(prevState => { return { contacts: [...prevState.contacts, newContact] } });
    e.currentTarget.reset();    
  }

  filterHandle = (e) => {     
    this.setState({filter: e.target.value.toLowerCase().trim()});
  }

  onDelete = (idToDelete) => { 
    this.setState(prevState => { 
      return { contacts: [...prevState.contacts.filter(contact => contact.id !== idToDelete)] }
    })
  }
  
  render() {
    return (
    <div>    
        <Section title={'Phonebook'} >
          <ContactForm handleSubmit={this.handleSubmit}/>          
        </Section>
        <Section title={'Contacts'} >
          <Filter filter={this.state.filter} filterHandle={this.filterHandle} />
          <ContactList filter={this.state.filter} contacts={this.state.contacts} onDelete={this.onDelete} />          
        </Section>       
    </div>      
  );
  }
}