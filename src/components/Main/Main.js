import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
import s from "./Main.module.css";

export default function Main() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };
  const addContact = (newContact) => {
    const findinList = contacts.find(
      ({ name }) =>
        newContact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
    if (findinList) {
      alert(`${findinList.name} is alredy in contact`);
      return;
    }
    setContacts((prev) => [...prev, newContact]);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  };
  const onChengeValue = (e) => {
    setFilter(e.currentTarget.value);
  };
  return (
    <div className={s.wraper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className={s.subtitle}>Contacts</h2>
      <Filter value={filter} onChengeValue={onChengeValue} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}
