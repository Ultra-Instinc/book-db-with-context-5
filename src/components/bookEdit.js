import BooksContext from "../context/books";
import { useState ,useContext } from "react";
const BookEdit = ({onSubmit,book}) => {

    const {updateBookById}=useContext(BooksContext)
    const [title,setTitle]=useState(book.title)
    const handleChange=(e)=>{
        setTitle(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        onSubmit()
        updateBookById(title,book.id)
        
    }


    return ( 
        <div className="w-[320px] ">
            <form className="flex flex-col justify-center items-center" action="" onSubmit={handleSubmit}>
                <label htmlFor="">New Title</label>
                <input required type="text" className="px-4 duration-500 bg-gradient-to-r from-blue-600/50 to-emerald-600/50 rounded-lg text-gray-800 text-2xl font-extrabold focus:ring-4 focus:ring-emerald-500 py-2 m-2 w-[300px] " value={title} onChange={handleChange} />
                <button className="bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-2 rounded-lg shadow-2xl shadow-emerald-600 hover:bg-gradient-to-tl focus:ring-4 focus:ring-blue-600 text-2xl font-bold font-signature hover:scale-110 duration-500 ">Confirm</button>
            </form>
        </div>
     );
}
 
export default BookEdit;