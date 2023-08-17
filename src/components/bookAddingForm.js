import { useState , useContext } from "react";
import BooksContext from "../context/books";

const BookAddingForm = () => {
    const {handleBookAdd}=useContext(BooksContext)
    const [title,setTitle]=useState('')
    const handleChange=(e)=>{
        setTitle(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        handleBookAdd(title)
        setTitle('')
    }



    return ( 
    <div className="fixed text-white bottom-0 h-1/3 border-4 w-full p-5 bg-gradient-to-b from-gray-800 to-black">
        <div className="flex flex-col items-center">
            <h1 className=" py-10 text-5xl font-signature font-bold "> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 shadow px-3">Add book to the reading list</span> </h1>
            <form onSubmit={handleSubmit} action=""className="flex flex-row justify-around w-full  ">
                <label htmlFor="" className="  text-5xl font-signature font-bold"> <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600 px-1">Enter book title</span> </label>
                <input 
                    required
                    type="text" 
                    value={title} 
                    onChange={handleChange} 
                    className="p-2 bg-gradient-to-r from-blue-600/50 to-emerald-600/50 rounded-lg text-gray-800 text-2xl font-extrabold focus:ring-4 focus:ring-emerald-500 mx-2 md:mx-4 lg:mx-6 focus:scale-105 duration-500"/>
                <button className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 rounded-lg shadow-2xl shadow-emerald-600 hover:bg-gradient-to-tl focus:ring-4 focus:ring-blue-600 text-2xl font-bold font-signature hover:scale-110 duration-500 "> Add Book</button>
            </form>
        </div>
        

        

    </div> );
}
 
export default BookAddingForm;