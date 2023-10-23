import { useEffect, useRef, useState } from "react";
import { Todo } from "../context/TodoContext";
import { useTodo } from "../context/useTodo";
import { Input } from "./Input";
import { BsCheck2Square } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";
import { toast } from "react-hot-toast";
import cn from "classnames";
import { motion } from "framer-motion";

export const TodoItem = (props: { todo: Todo }) => {
  const { todo } = props;

  const [editingTodoText, setEditingTodoText] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);

  const { deleteTodo, editTodo, updateTodoStatus } = useTodo();

  const editInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editingTodoId !== null && editInputRef.current) {
      editInputRef.current.focus();
    }
  }, [editingTodoId]);

  const handleEdit = (todoId: string, todoText: string) => {
    setEditingTodoId(todoId);
    setEditingTodoText(todoText);

    if (editInputRef.current) {
      editInputRef.current.focus();
    }
  };

  const handleUpdate = (todoId: string) => {
    if (editingTodoText.trim() !== "") {
      editTodo(todoId, editingTodoText);
      setEditingTodoId(null);
      setEditingTodoText("");
      toast.success("Todo updated successfully!");
    } else {
      toast.error("Todo field cannot be empty!");
    }
  };

  const handleDelete = (todoId: string) => {
    deleteTodo(todoId);
    toast.success("Todo deleted successfully!");
  };

  const handleStatusUpdate = (todoId: string) => {
    updateTodoStatus(todoId);
    toast.success("Todo status updated successfully!");
  };

  return (
    <motion.li
      layout
      key={todo.id}
      className={cn(
        "p-5 rounded-lg border border-gray-500 shadow",
        todo.status === "completed" && "bg-opacity-50 text-zinc-500"
      )}
    >
      {editingTodoId === todo.id ? (
        <motion.div layout className="flex h-full flex-col gap-3">
          <Input
            ref={editInputRef}
            type="text"
            value={editingTodoText}
            onChange={(e) => setEditingTodoText(e.target.value)}
            className="flex-auto"
          />
          <button
            className="px-5 py-3 text-sm font-normal text-white bg-blue-600 active:scale-95 rounded-lg border"
            onClick={() => handleUpdate(todo.id)}
          >
            Update
          </button>
        </motion.div>
      ) : (
        <div className="flex flex-col gap-5 h-full">
          <small className="text-zinc-500">
            {new Date(todo.date).toDateString()}
          </small>
          <motion.span
            layout
            className="flex-auto"
            style={{
              textDecoration:
                todo.status === "completed" ? "line-through" : "none",
            }}
          >
            {todo.text}
          </motion.span>
          <div className="flex justify-between flex-wrap gap-2">
            <button onClick={() => handleStatusUpdate(todo.id)}>
              {todo.status === "undone" ? (
                <span className="flex items-center gap-1">
                  <BsCheck2Square />
                  Completed
                </span>
              ) : (
                <span className="flex items-center gap-1">
                  <TbRefresh />
                  Undone
                </span>
              )}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleEdit(todo.id, todo.text)}
                className="flex items-center gap-1 hover:text-gray-200"
              >
                <FaRegEdit />
                Edit
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-600"
              >
                <RiDeleteBin7Line />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </motion.li>
  );
};
