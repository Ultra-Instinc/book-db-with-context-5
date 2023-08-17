import BooksContext from "../context/books";
import { useContext } from "react";
import BookItem from "./bookItem";
const BookList = () => {
    const {books} =useContext(BooksContext)

    const iteratedBooks=books.map((book)=>{
        return(
        <div className="mx-auto my-5" key={book.id} >
            <BookItem  book={book}/>
        </div>
        )
    })




    return ( 
        <div className=" bg-gradient-to-b from-black to-gray-800 flex flex-wrap p-10  border-2 text-emerald-500 text-2xl absolute min-h-screen  h-a  w-full   ">
            
            {iteratedBooks}
        </div>
        );
}
 
export default BookList;