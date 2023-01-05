import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    if (title !== "" && title.length > 0) {
      e.preventDefault();
      onCreate(title);
      setTitle("");
    }
  };

  return (
    <div className="book-create">
      <h3>Додати книжку</h3>
      <form onSubmit={handleSubmit}>
        <label>Назва</label>
        <input
          className="input"
          placeholder="Введіть назву"
          value={title}
          onChange={handleChange}
        />
        <button className="button">Додати!</button>
      </form>
    </div>
  );
};

export default BookCreate;
