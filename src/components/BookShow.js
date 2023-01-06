import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle,checked) => {
    setShowEdit(false);
    onEdit(id, newTitle,checked);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
  }

  return (
    <>
      <div className="book-show">
        <div style={{ backgroundColor:book.checked? "green" : "red", width: "20px", height: "20px",borderRadius:"50%", position:"absolute", top:"7px"}}></div>
        <img alt="books" src={`https://picsum.photos/seed/${book.id}300/200`} />
        <div>{content}</div>
        <div className="actions">
          <button className="edit" onClick={handleEditClick}>
            Edit
          </button>
          <button className="delete" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default BookShow;
