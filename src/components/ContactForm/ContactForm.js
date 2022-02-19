import PropTypes from "prop-types";
import React, { useState } from "react";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onChengeValue = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const id = nanoid();
    onSubmit({ id, name, number });
    setName("");
    setNumber("");
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.title}>
        name
        <input
          className={s.input}
          type="text"
          name="name"
          onChange={onChengeValue}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.title}>
        number
        <input
          className={s.input}
          type="tel"
          name="number"
          onChange={onChengeValue}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.button} type="submit">
        add to contact
      </button>
    </form>
  );
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
