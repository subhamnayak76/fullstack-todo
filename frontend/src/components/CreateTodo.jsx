import axios from 'axios'
import { useState ,useEffect} from "react";
export function CreateTodo({todo,setTodo}){
    const [title,setTitle] = useState("")
    const [description,setDesecription] = useState("")
    const handleAddTodo = () => {
        console.log("hi")
        const data = {
          title: title,
          description: description
        };
      
        axios.post('http://localhost:3000/todos', data)
          .then(response => {
            console.log(response.data);
            // Update the todo state with the new data
            // setTodo([...todo, response.data]);/
            setTodo(prevTodo => [...prevTodo, response.data]);
            alert('Todo added');
          })
          .catch(error => {
            console.error('Error adding todo:', error);
          });
      };
      
    return (
        <div>
            <input type="text"  placeholder ="title" 
            onChange={(event)=>{
                setTitle(event.target.value)
            }}
            ></input> <br />

            <input type="text" 
            placeholder ="desc"
            onChange= {(event)=>{
                setDesecription(event.target.value)
            }}
            />
            <br />

            <button onClick = {
                handleAddTodo
            }>add todo</button>
        </div>
    )
}