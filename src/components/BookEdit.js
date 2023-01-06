import React, { useState } from "react";

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const [checked,setChecked] = useState(book.checked);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, title, checked);
  };

  

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Назва</label>
      <input className="input" value={title} onChange={handleChange} />
      <label>Читаю зараз</label>
      <input type="checkbox" checked={checked} onChange={()=> setChecked(!checked)}/>
      <button className="button is-primary">Редагувати</button>
    </form>
  );
};

export default BookEdit;
