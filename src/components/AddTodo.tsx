import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useTodo } from "../context/useTodo";

import { Input } from "./Input";

const AddTodo = () => {
  const [input, setInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
      toast.success("Todo added successfully!");
    } else {
      toast.error("Todo field cannot be empty!");
    }
  };

  return (
    <form onSubmit={handleSubmission} className="w-full">
      <div className="flex gap-3 items-center w-full ">
        <Input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="start typing ..."
        />

        <button
          type="submit"
          className="px-5 py-3 text-sm font-normal text-white bg-blue-600 active:scale-95 rounded-lg border"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
