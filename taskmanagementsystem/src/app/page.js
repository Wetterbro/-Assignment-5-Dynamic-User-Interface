"use client"
import React, {useEffect, useState} from "react";
import TaskForm from "@/app/components/taskForm";
import { getTasks } from "./components/taskOperations.js";
import {Suspense} from 'react'
import Image from "next/image";
const MyCalender = React.lazy(() => import('./components/Calender.js'));

const TaskList = React.lazy(() => import('./components/taskList.js'));

export default function Home() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [tasks, setTasks] = useState([]);

  // update the tasks when the button is pressed
    useEffect(() => {
        console.log("buttonPressed", buttonPressed);
        const fetchTasks = async () => {
            try {
                const newTasks = await getTasks();
                setTasks(newTasks);
            } catch (error) {
                console.error("Failed to fetch tasks:", error);
            }
        };
        fetchTasks().catch(error => console.error("Failed to fetch tasks:", error));
        setButtonPressed(false);
    }, [buttonPressed]);
    
// fetch the tasks when the page loads
useEffect(() => {
  const fetchTasks = async () => {
    const newTasks = await getTasks();
    setTasks(newTasks);
};
fetchTasks();
}, []);



  return (
    <main>
     <header className="flex justify-center">
      <Image
          src="/logo.webp"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </header>

      <section className="flex justify-center font-bold">
      <TaskForm onFormSubmit={formData => {
          setButtonPressed(true);
      }} />
      </section>
      <Suspense fallback={<div className="float mx-auto" >Loading...</div>}>
       <MyCalender tasks = {tasks}/>
      </Suspense>

      <Suspense fallback={<div className="float mx-auto" >Loading...</div>}>
      <div>
        <TaskList allTasks={tasks} setButtonPressed={setButtonPressed} />
      </div>
      </Suspense>

    </main>
  );
}
