import React, { useState, useEffect } from 'react'; 
import TaskForm from './components/TaskForm'; 
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import axios from 'axios';

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };
  const toggleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get('http://section4-14-2-app-1:4000/api/tasks');
        setTasks(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <>
    <div className="bg-emerald-300 text-center pb-5 mt-10 mx-10  mx-auto">
      <h1 className="text-4xl font-extrabold">Todoリスト</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} 
        toggleCompleteTask={toggleCompleteTask}
        setSelectedTask={setSelectedTask}
        deleteTask={deleteTask}
      />
      {selectedTask && <TaskDetail task=
        {selectedTask} taskDetailClosed={() => 
        setSelectedTask(null)}
        />
      }   
    </div>
    </>
  );
}

export default Home;
