import { Axios } from "axios";
import { Inter } from "next/font/google";
import React, { useState } from "react";

import Axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    const todoObj = {
      title: title,
      todo: todo,
    };
    console.log(todoObj);
    Axios.post("/api/newTodo", todoObj).then(() => {
      alert("Todo Added ");
    });
  };
  return (
    <>
      <div className="container">
        <h1>Create Todo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title :
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="todo" className="form-label">
              Todo :
            </label>
            <input
              type="text"
              className="form-control"
              id="todo"
              aria-describedby="emailHelp"
              onChange={(event) => setTodo(event.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
