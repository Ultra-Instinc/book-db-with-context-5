import { useEffect , useContext} from "react"
import BookAddingForm from "./components/bookAddingForm"
import BookList from "./components/bookList"
import BooksContext from "./context/books"

 function App() {
  const {fetchBooks}=useContext(BooksContext)
  
  useEffect(()=>{
    fetchBooks()
  },[fetchBooks])

  
  
  return ( <div className=" bg-gradient-to-b from-black to-gray-900">
   <div className="flex">
    
    <div className=" text-2xl absolute  w-full">
      <h1 className=" border-4 bg-gradient-to-b from-gray-900 to-black p-3 text-6xl font-bold font-signature items-center justify-center flex"><span className="p-3 bg-gradient-to-tr from-blue-500 to-emerald-500 bg-transparent text-transparent  bg-clip-text">Reading List</span></h1>
      <BookList  /> 
    </div>
    <div className="absolute bottom-0 w-full ">
    <BookAddingForm />
    </div>
  </div>
  </div>
  )
}

export default App