import React, { useState } from "react";

const AddTask = (props) => {
  const [task, setTask] = useState("");
  console.log(task);

  const addHandler = () => {
    if (task) {
      return props.setList((taskList) => [...props.taskList, task]);
    }
  };

  return (
    <div className="h-full w-full bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 py-4 px-10  ">
      <form
        className="flex bg-white ring-1 ring-gray-100 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="outline-none rounded-md px-3 py-1 text-gray-600 text-xl w-full"
          placeholder="Task to do"
          value={task}
          onChange={(evt) => setTask(evt.target.value)}
        />

        <button onClick={addHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" h-7 w-7 text-gray-600 mx-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
