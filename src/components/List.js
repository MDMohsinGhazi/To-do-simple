import React from "react";

const List = (props) => {
  const removeHandler = (id) => {
    const newList = props.taskList.filter((item, index) => index !== id);
    props.setList(newList);
  };

  return (
    <div className="h-full w-full bg-white-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 border border-gray-100 p-5 my-10">
      <ul className="h-max-h-screen">
        {props.taskList.map((task, index) => {
          return (
            <li
              key={index}
              className="flex items-start justify-between text-lg text-gray-600 font-semibold border-b p-2 border-b-purple-200 "
            >
              <div>{task}</div>
              <div className="space-x-3">
                <button onClick={() => removeHandler(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-lg fill-gray-600"
                    viewBox="0 0 20 20"
                    // fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {props.taskList.length === 0 ? (
        <div className="text-xl md:text-2xl font-bold text-gray-500 text-center">
          Please add task
        </div>
      ) : null}
    </div>
  );
};

export default List;
