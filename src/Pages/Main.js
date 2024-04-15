import React, { useState } from "react";
import { toast } from 'react-hot-toast';
// import BackgroundBeams from "../ui/BackgroundBeams"
import '../App.css'
function Main() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("09:00");
  const [date, setDate] = useState("2022-03-01");
  const [showForm, setShowForm] = useState(false);
  const [buttonText, setButtonText] = useState("Add Task");
  const [tasks, setTasks] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true); // initialize isDisabled state to true

//   const [isDisabled, setIsDisabled] = useState(true); // initialize isDisabled state to true

  const handleAddTaskClick = () => {
    setShowForm(!showForm); // toggle showForm state when cancel button is clicked
    setButtonText(showForm? "Add Task" : "Cancel");
    setTitle("");
    setDescription("");
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      time,
      date,
    };
    const existingTask = tasks.find(task => task.title === newTask.title && task.description === newTask.description && task.time === newTask.time && task.date === newTask.date);
    if (existingTask) {
      alert("Task already exists!");
    } else {
      toast.success('Task added successfully!', {
        duration: 3000, // duration of the toast message in milliseconds
        position: 'top-right', // position of the toast message
      });
      setTasks([...tasks, newTask]);
    }
  }
const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setIsDisabled(e.target.value.length === 0 || description.length === 0);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setIsDisabled(title.length === 0 || e.target.value.length === 0);
  }


  return (
    <div className="flex flex-col justify-center items-center gap-6">
    <div className="addContainer border-2 border-solid border-richblue-500 md:w-1/3 md:mx-auto mx-3 mt-3 rounded-lg flex justify-center p-8 bg-primary">
      <div className="w-11/12">
        <button 
        onClick={handleAddTaskClick}
        className="bg-richblue-100 border px-3 py-2 border-gray-500 text-tranparent text-richblue-5 rounded-lg hover:bg-gray-500 hover:text-white hover:-transparent hover" >
            {buttonText}
        </button>
        {showForm && (
        <form>
          <div>
            <label htmlFor="title" className="text-white">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              //   onChange={handleTitleChange}
              placeholder="Write your title here..."
              required
              onChange={handleTitleChange}
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="my-3">
            <label className="text-white" htmlFor="description">
              Description
            </label>
            <textarea
              rows={5}
              name="description"
              id="description"
              value={description}
              required
              placeholder="Write description here..."
              onChange={handleDescriptionChange}
              style={{ resize: "none" }}
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex gap-2 mb-5">
            <input
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="date"
              name="date"
              id="date"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              defaultValue="2022-03-01" // set default value for date
            />
            <input
              className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="time"
              name="time"
              onChange={(e) => setTime(e.target.value)}
              id="time"
              value={time}
              defaultValue="09:00" // set default value for time
            />
          </div>
          <div className="flex justify-center gap-3">
            <button
              onClick={handleFormSubmit}
              disabled={isDisabled} // disable the button if title or description is empty
              className={isDisabled?"bg-richblue-400  text-white px-5 py-1 ":" bg-blue-500 rounded-md text-white px-5 py-1 hover:bg-transparent hover:border-2 hover:border-e-richblack-400 "}
            >
              Add
            </button>
            <button
              onClick={() => {
                setTitle("");
                setDescription("");
                alert("please fill the filled first")
              }}

              className=" bg-blue-500 rounded-md text-richblack-5 px-5 py-1 hover:bg-transparent hover:border-2 hover:border-e-richblack-400 "
            >
              Reset
            </button>
          </div>
        </form>
          )}
      </div>
     

    </div>
    
    <div className="customcode-container  w-9/12">
    <ul className="responsive-table" >
      <li className="table-header bg-primary mx-3 my-6 rounded-xl" style={{fontSize:"12px"}}>
        <div className="customcode-column">S.No</div>
        <div className="customcode-column">Title</div>
        <div className="customcode-column">Description</div>
        <div className="customcode-column">Date</div>
        <div className="customcode-column">Time</div>
        <div className="customcode-column">Action</div>
      </li>
      {tasks.map((task, index) => {
  const taskDate = new Date(task.date);
  const taskTime = new Date(task.date + "T" + task.time);
  const now = new Date();
  const isToday = taskDate.setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0);

  const isExpired = now > taskTime;

  return (
      <li  className={isToday? "border-2 rounded-4xl mx-3 my-2  border-caribbeangreen-50" : isExpired? "border border-pink-500 rounded-4xl mx-3 my-6" : "border border-richblack-25 rounded-4xl mx-3 my-6"}>
      <div className="customcode-column">{index+1}</div>
        <div className="customcode-column">{task.title}</div>
        <div className="customcode-column">{task.description}</div>
        <div className="customcode-column">{task.date}</div>
        <div className="customcode-column">{task.time}</div>
        <div className="customcode-column">Delete</div>
      </li>
        );
    })}
    </ul>
  </div>
  {/* <BackgroundBeams/> */}
    </div>
  );
}

export default Main;
