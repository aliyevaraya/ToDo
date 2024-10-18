import { useState } from "react";
import { MdDelete, MdEditSquare } from "react-icons/md";

function App() {
  const [todo, setTodo] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  function addTodo() {
    todo.trim() ? setTodoArr([...todoArr, todo]) : "";
    setTodo("");
  }

  function deleteTodo(index) {
    setTodoArr(todoArr.filter((item, i) => index != i));
  }

  function editTodo(index) {
    setTodo(todoArr[index]);
  }

  return (
    <section className="text-white bg-blue-950 h-screen py-[10vh] flex items-center flex-col">
      <div className="w-[250px] min-[400px]:w-[400px] px-2">
        <h1 className="text-[44px] my-[30px] text-center">To Do List</h1>
        <div className="flex">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="add ToDo"
            className="w-full p-2 bg-gray-500 outline-none placeholder:text-white"
            type="text"
          />
          <button
            onClick={addTodo}
            className="border px-4 hover:bg-[#2b2b6f98]"
          >
            Add
          </button>
        </div>
        <div>
          {todoArr.map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between p-2 mt-8 border"
              >
                <p>{item}</p>
                <span className="flex items-center gap-3 text-[20px]">
                  <MdEditSquare
                    onClick={() => editTodo(i)}
                    className="text-green-500 cursor-pointer"
                  />
                  <MdDelete
                    onClick={() => deleteTodo(i)}
                    className="text-red-600 cursor-pointer"
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
