import "./style.scss";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";


const Update = () => {
  
  const [books, setBooks] = useState({
    title: "",
    description: "",
    cover: "",
});

const navigate = useNavigate()
const location = useLocation()

const bookId = location.pathname.split("/")[2]

  const handleChange = (e) => {
    setBooks((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
        await axios.put("http://localhost:8800/books/" + bookId, books)
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

    return (
      <div className="add">
        <h3>Update The Book</h3>
        <input type="text" onChange={handleChange} name='title' />
        <textarea type="text" onChange={handleChange} name='description'/>
        <input type="text" onChange={handleChange} name='cover'/>
        <button onClick={handleClick}>Update</button>
      </div> 
    )
  }
  
  export default Update
  