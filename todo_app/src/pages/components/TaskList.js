import React from 'react';

function TaskList({ tasks, toggleCompleteTask, deleteTask, setSelectedTask }) {
  return (
    <div className="bg-emerald-100  w-4/5 mx-auto">
      <h2 className="text-xl bg-emerald-50">タスク一覧</h2>
      {tasks.map((task, index) => (
        <div key={index}>
          <div
            className="hover:bg-slate-400 cursor-pointer"
            onClick={() => setSelectedTask(task)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black',
            }} >
            <span>タスク名：{task.name}｜期日：{task.date}｜優先度：{task.status}</span>
          </div>
          <button className="bg-slate-300 hover:bg-slate-400 px-3 m-1 rounded-[8px] cursor-pointer" onClick={() => toggleCompleteTask(index)}>
            {task.completed ? '戻す' : '完了'}</button>
          <button className="bg-slate-300 hover:bg-slate-400 px-3 m-1 rounded-[8px] cursor-pointer" onClick={() => deleteTask(index)}>削除</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;