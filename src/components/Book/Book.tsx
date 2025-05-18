import css from "./Book.module.css"
interface Book {
    id: string;
    name: string;
  }
  
  const books: Book[] = [
    { id: "id-1", name: "JS for beginners" },
    { id: "id-2", name: "React basics" },
    { id: "id-3", name: "React Query overview" },
  ];
  
  export default function Book() {
    return (
      <>
        <h1 className={css.title}>Books of the week</h1>
        <ul>
          {books.map((book) => (
            <li className={css.paragraph} key={book.id}>{book.name}</li>
          ))}
        </ul>
      </>
    );
}
  
