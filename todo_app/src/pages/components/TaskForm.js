import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('最優先');

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      detail: taskDetail,
      date: dueDate,
      status: status,
      completed: false,
    };
    addTask(newTask); 
    setTaskName('');
    setTaskDetail('');
    setDueDate('');
    setStatus('最優先');
  };

  return (
    <>
    <form className="flex justify-center">
      <table>
        <tbody>
        <tr>
          <th><label htmlFor="name" className="font-normal">タスク名</label></th>
          <td>
            <input
            id="name"
            className="my-1 border-2 rounded rounded w-44"
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)} />
          </td>
        </tr>
        <tr>
          <th><label htmlFor="detail" className="font-normal">タスクの詳細</label></th>
          <td>
            <textarea
              id="detail"
              className="my-1 align-middle border-2 rounded w-44"
              type="text"
              value={taskDetail}
              onChange={(e) => setTaskDetail(e.target.value)} />
          </td>
        </tr>
        <tr>
          <th><label htmlFor="due" className="font-normal">期日</label></th>
          <td>
            <input
              id="due"
              className="my-1 w-44 border-2 rounded rounded align-center cursor-pointer"
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)} />
          </td>
        </tr>
        <tr>
          <th><label htmlFor="priority" className="font-normal">ステータス</label></th>
          <td>
            <select
              id="priority"
              className="my-1 mr-6 align-middle border-2 rounded cursor-pointer"
              value={status}
              onChange={(e) => setStatus(e.target.value)}>
              <option>最優先</option>
              <option>高</option>
              <option>中</option>
              <option>低</option>
            </select>
            <button type="submit" className="bg-slate-300 hover:bg-slate-400 py-1 px-3 rounded-[8px] cursor-pointer" onClick={handleAddTask}>
              登録
            </button>
          </td>
        </tr></tbody>
      </table>
    </form>  
    </>
  );
}

export default TaskForm;
