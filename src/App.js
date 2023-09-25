import { useState, useEffect, useContext } from "react"
// import './App.css';


import Header from "./components/Header/Header";
import TodoList from "./components/TodoList";
import dayImg from "./components/img/day1.jpeg"
import nightImg from "./components/img/night1.jpeg"
import { TodoContext } from "./context/TodoContext";

function App() {
  const [ todos, setTodos ] = useContext( TodoContext );
  const [darkModeStatus, setDarkModeStatus] = useState(false);
  // const [todos, setTodos] = useState([]);
console.log("test1",todos)

  useEffect(() => {
    const todos = localStorage.getItem('todos');
    if(todos){
      setTodos(JSON.parse(todos))
    }
  }, [])



  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  
  const dayInlineStyle = {
    backgroundImage: `url(${dayImg})`,
  }

  const nightInlineStyle = {
    backgroundImage: `url(${nightImg})`,
  }

  const updateTodo = id => {
    // complete and uncomplete toggle of todo (update)
    const newTodos = todos.map(t => t.id == id ? { ...t, completed: !t.completed } : t);
    setTodos(newTodos);
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(t => t.id !== id);
    setTodos(newTodos);
  }

  return (
    <div className={`${darkModeStatus ? 'dark' : ''} h-screen font-josefin`}>
      <div className="bg-white dark:bg-gray-900 h-full overflow-x-auto">
        <div>
          <title>TodoList</title>
          <link rel="icon" href="/favicon.ico" />
        </div>

        {/* Top header of light and dark images */}
        <div className="h-72 bg-cover" style={darkModeStatus ? nightInlineStyle : dayInlineStyle}>
          <div className="h-full bg-purple-500 bg-opacity-50"></div>
        </div>

        {/* overlaying div of top background header */}
        <div className="h-52 -mt-72 sm:-mt-60 py-8 px-4 sm:px-16 max-w-screen-sm mx-auto">
          <Header darkModeStatus={darkModeStatus} setDarkModeStatus={setDarkModeStatus} /* todos={todos} setTodos={setTodos} */ />

          {/* Todo list components */}
          <TodoList /* todos={todos} */ updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
