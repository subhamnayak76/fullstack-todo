import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios'
function App() {
  const [todo, setTodo] = useState([

  ])
  // useEffect(( ) =>{
  //   axios.get("http://localhost:3000/view")
  //   .then((response) =>{
  //     setTodo(response.data.response)
  //     console.log(response.data)
  //   })
  // },[])
  return (
    <>
     <CreateTodo todo = {todo} setTodo={setTodo} />
     
     <Todos todo = {todo} setTodo ={setTodo}/>
    </>
  )
}

export default App
