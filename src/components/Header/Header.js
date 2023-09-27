import { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TodoContext } from '../../context/TodoContext';

const Header = ({ darkModeStatus, setDarkModeStatus,}) => {
  const [ todos, setTodos ] = useContext( TodoContext );
    const [todo, setTodo] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      setTodos([...todos, { id: uuidv4(), todo, completed: false }]);
      setTodo("");
    }
    console.log("header",todo,darkModeStatus)
  return (
    <div className="text-white">
    <div className="flex justify-between">
        <h1 className="text-4xl font-extrabold tracking-widest">TODAY TASKS...</h1>
        <button className="h-8 w-8 focus:outline-none" onClick={() => setDarkModeStatus(!darkModeStatus)}>
          {darkModeStatus ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
    </div>

    {/* Todo Input */}
    <div className="flex items-center p-3 mt-8 bg-white dark:bg-gray-800 rounded-md">
      <button className={`focus:outline-none ${(todo.length <= 0) && 'cursor-not-allowed'}`}>
        <div className="w-6 h-6 border rounded-full">
          {(todo.length > 0) && (
            <svg onClick={() => setTodo("")} className="w-full h-full text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </button>

      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setTodo(e.target.value)} className="flex-grow mt-1 pl-4 outline-none dark:bg-gray-800 dark:text-white text-gray-800 placeholder-gray-500 text-lg" value={todo} placeholder="Create a new task" type="text" />
      </form>
    </div>
</div>
  )
}

export default Header