import React, { useEffect, useState } from "react";

import TaskList from "./TaskList";
import FormTodo from "./FormTodo";

const Container = () => {
  const [list, setList] = useState(JSON.parse(localStorage.getItem("listMemory")) ? JSON.parse(localStorage.getItem("listMemory")) : []); // (B-1)
  
  // (A-2)
  const handleAddItem = addItem => {
    setList([...list, addItem]); // (B-2)
  };
  
  useEffect(()=> {
    localStorage.setItem("listMemory", JSON.stringify(list))
  }, [list])
  return (
    <div>
      {/*(A-1)*/}
      <FormTodo handleAddItem={handleAddItem} />
      {/*(C)*/}
      <TaskList list={list} setList={setList} />
    </div>
  );
};

export default Container;