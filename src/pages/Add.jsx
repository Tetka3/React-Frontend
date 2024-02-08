import "./style.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Add = () => {
  
  const [books, setBooks] = useState({
    title: "",
    description: "",
    cover: "",
});

const navigate = useNavigate()

  const handleChange = (e) => {
    setBooks((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleClick = async (e) => {
    e.preventDefault()
    try{
        await axios.post("http://localhost:8800/books/", books)
        navigate("/")
    }catch(err){
        console.log(err)
    }
}

    return (
      <div className="add">
        <input type="text" onChange={handleChange} name='title' />
        <textarea type="text" onChange={handleChange} name='description'/>
        <input type="text" onChange={handleChange} name='cover'/>
        <button onClick={handleClick}>Add</button>
      </div> 
    )
  }
  
  export default Add
  