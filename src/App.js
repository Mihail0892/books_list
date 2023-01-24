import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import picture from "./assets/2.jpg";

function App() {
  const [books, setBooks] = useState([]);

  // const fetchBooks = () => {
  //   const localBooks = JSON.parse(localStorage.getItem("books"));
  //   setBooks(localBooks ? localBooks : books);
  // };

  useEffect(() => {
    const localBooks = JSON.parse(localStorage.getItem("books"));
    setBooks(localBooks ? localBooks : []);
  }, []);

  const editBookById = (id, newTitle, checked) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle, checked: checked };
      }
      return book;
    });
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title: title,
      },
    ];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  return (
    <div className="app">
      <h1>Підбірка книжок</h1>
      {books.length === 0 ? (
        <img   src={picture} alt='egeg'></img>
      ) : (
        <BookList
          onEdit={editBookById}
          books={books}
          onDelete={deleteBookById}
        />
      )}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
