import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./style.scss";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect (() => {
        const fetchAllBooks = async () => {
            try{
                 const res = await axios.get("http://localhost:8800/books")
                 setBooks(res.data) 
            }catch(err){
                console.log(err)
            }
        }
        fetchAllBooks()
    }, [])

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload()
        }catch(err){
            console.log(err)
        }
    }
    
    return (
      <div className="book">
        {books.map(book=>(
            <div className="books" key={book.id}>
                {book.cover && <img src={book.cover} alt="cover" /> }
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <button onClick={() => handleDelete(book.id) }>Delete</button>
                <button ><Link to={`/update/${book.id}`}>Update</Link></button> 
                  
            </div>
        )) }
            
      </div>
    )
  }
  
  export default Books
  