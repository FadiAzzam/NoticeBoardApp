import { useTodo } from "../context/useTodo";
import { SiStarship } from "react-icons/si";
import { TodoItem } from "./TodoItem";
import { motion } from "framer-motion";

const TodoList = () => {
  const { todos } = useTodo();

  if (!todos.length) {
    return (
      <div className=" ">
        <div className="flex flex-col items-center gap-3 w-1/2 mx-auto rounded-lg border border-zinc-50 shadow px-5 py-10">
          <SiStarship className="text-5xl text-blue-400" />
          <h1 className="text-xl font-bold text-center">
            You have nothing to do!
          </h1>
        </div>
      </div>
    );
  }

  return (
    <motion.ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </motion.ul>
  );
};

export default TodoList;
