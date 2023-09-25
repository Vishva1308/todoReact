import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const TodoList = ({ /* todos, */ updateTodo, deleteTodo }) => {
  const [filteredOn, setFilteredOn] = useState("all");
  const [ todos ] = useContext( TodoContext );
    let filteredTodos;

    
    switch(filteredOn){
        case 'all': 
            filteredTodos = todos;
        break;
        case 'complete': 
            filteredTodos = todos.filter(t => t.completed === true);
        break;
        case 'active': 
            filteredTodos = todos.filter(t => t.completed === false);
        break;
    }



  return (
    <div className="mt-8 shadow-2xl bg-white dark:bg-gray-800 dark:text-white rounded">
    <div>
        <div className="p-4">
            {todos?.length > 0 && <p className="mb-3">Total tasks {todos?.length}, completed {todos?.filter(t => t.completed === true).length}.</p>}
            <div className="flex">
                <button onClick={() => setFilteredOn('all')} className={`py-1 px-3 border-2 border-purple-600 focus:outline-none rounded ${(filteredOn == 'all') ? 'bg-purple-600 text-white' : 'text-purple-600'}`}>All</button>
                <button onClick={() => setFilteredOn('active')}  className={`py-1 px-3 border-2 border-purple-600 focus:outline-none rounded ml-2  ${(filteredOn == 'active') ? 'bg-purple-600 text-white' : 'text-purple-600'}`}>Active</button>
                <button onClick={() => setFilteredOn('complete')}  className={`py-1 px-3 border-2 border-purple-600 focus:outline-none rounded ml-2  ${(filteredOn == 'complete') ? 'bg-purple-600 text-white' : 'text-purple-600'}`}>Completed</button>
            </div> 
        </div>
        <div>
            {filteredTodos?.map(todo => (
                <div key={todo.id} className="flex items-center border-b-2 dark:border-gray-500 p-3 rounded-b">
                    {/* update button */}
                    <svg onClick={() => updateTodo(todo?.id)} className={`w-7 h-7 ${todo?.completed ? 'bg-gradient-to-r from-pink-400 to-purple-600' : 'bg-white border-2'} rounded-full cursor-pointer text-white flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {/* delete button */}
                    <p className={`${todo?.completed && 'line-through'} ml-3 pt-1 flex-grow truncate`}>{ todo?.todo }</p>
                    <button onClick={() => deleteTodo(todo?.id)} className="w-8 h-8 border-2 border-white shadow p-1 rounded-full bg-red-400 text-white focus:outline-none flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                </div>
            ))}
        </div>             
    </div>
</div>
  )
}

export default TodoList