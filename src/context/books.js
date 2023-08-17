import { createContext, useState } from "react";
import  axios  from 'axios';

const BooksContext=createContext()

function Provider({children}){
    const [books,setBooks]=useState([])

  const fetchBooks=async()=>{
    const response=await axios.get('http://localhost:3001/books')
    setBooks(response.data)
  
  }

  const updateBookById= async (title,id)=>{
    const response=await axios.put(`http://localhost:3001/books/${id}`,{
      title:title
    })
    const updatedBooks=books.map((book)=>{
      if(book.id === id){
        return {...book,...response.data}
      }
      return book
    })
    setBooks(updatedBooks)
  }

  const deleteBookById=async (id)=>{
    await axios.delete(`http://localhost:3001/books/${id}`)
    const updatedBooks=books.filter((book)=>{
      return book.id !== id
    })
    setBooks(updatedBooks)
  }

  const handleBookAdd= async (title)=>{
    const response= await axios.post('http://localhost:3001/books',{
      title:title
    })
    const updatedBooks= [...books,response.data]
    setBooks(updatedBooks)
  }
  const valueToShare={
    books,
    deleteBookById,
    updateBookById,
    handleBookAdd,
    fetchBooks
  }


    return (
        <BooksContext.Provider  value={valueToShare} >
            {children}
        </BooksContext.Provider>
    )
}



export default BooksContext
export {Provider}