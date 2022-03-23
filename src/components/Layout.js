import React, { useState } from "react";
import AddTask from "./AddTask";
import List from "./List";
import Img from "./../assets/img.jpg";

const Layout = () => {
  const [taskList, setList] = useState([]);
  return (
    <div
      className="container h-screen w-screen bg-no-repeat bg-cover m-auto"
      style={{
        backgroundImage: `url(${Img})`,
      }}
    >
      <div className="mx-auto w-4/5 sm:w-1/2 pt-20 flex flex-col items-center">
        <AddTask taskList={taskList} setList={setList} />
        <List taskList={taskList} setList={setList} />
      </div>
    </div>
  );
};

export default Layout;
