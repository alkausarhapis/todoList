import React, { useState } from "react";
import Form from "./Form";
import Todos from "./Todos";
import Edit from "./Edit";

const TodoList = () => {
  const [todoVal, setTodo] = useState([]);

  const createTodo = (todo) => {
    setTodo([
      ...todoVal,
      { id: crypto.randomUUID(), task: todo, isEditing: false, isDone: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodo(todoVal.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodo(
      todoVal.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodo(
      todoVal.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const checkTodo = (id) => {
    todoVal.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-300 pt-7 font-primary mb-7">
        Todo List App
      </h1>

      <Form createTodo={createTodo} />

      {todoVal.length > 0 ? (
        <div className="container mt-10 w-[400px] p-3 flex items-center flex-col bg-slate-400 max-h-[62vh] overflow-y-scroll no-scrollbar">
          {todoVal.map((todo, idx) =>
            todo.isEditing ? (
              <Edit key={idx} editTask={editTask} task={todo} />
            ) : (
              <Todos
                task={todo}
                key={idx}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
          <footer className="bottom-0 mt-2 text-slate-600">
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
