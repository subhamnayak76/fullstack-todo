import axios from "axios";
import { useEffect } from "react";

export function Todos({ todo, setTodo }) {

    axios.get('http://localhost:3000/view')
      .then((response) => {
        setTodo(response.data.response);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  

  return (
    <div>
      {todo.map((x) => (
        <div key={x._id}>
          <h1>{x.title}</h1>
          <h2>{x.description}</h2>
        </div>
      ))}
    </div>
  );
}
