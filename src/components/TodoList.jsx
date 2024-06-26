import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";

const TodoList = () => {
  const [todoVal, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([
      ...todoVal,
      { id: crypto.randomUUID(), task: todo, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodo(todoVal.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="pt-7 text-2xl font-bold font-primary text-gray-300 mb-7">
        Todo List App
      </h1>

      <Form createTodo={createTodo} />

      {todoVal.length > 0 ? (
        <div className="container mt-10 w-[400px] p-3 flex items-center flex-col bg-slate-400 max-h-[62vh] overflow-y-scroll no-scrollbar">
          {todoVal.map((todo, idx) => (
            <Todos task={todo} key={idx} deleteTodo={deleteTodo} />
          ))}
          <footer className="bottom-0 text-slate-600 mt-2">
            Designed and built by Hapis
          </footer>
        </div>
      ) : (
        <p className="text-gray-500">No task available</p>
      )}
    </div>
  );
};

export default TodoList;
