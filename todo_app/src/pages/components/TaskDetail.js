import React from 'react';

function TaskDetail({ task, taskDetailClosed }) {
  return (
    <div className="bg-emerald-50 w-4/5 mx-auto">
      <h2>タスク詳細</h2>
      <p>タスク名：{task.name}</p>
      <p>タスクの詳細：{task.detail}</p>
      <p>期日：{task.date}</p>
      <p>優先度：{task.status}</p>
      <button 
        className="bg-slate-300 hover:bg-slate-400 px-3 m-1 rounded-[8px] cursor-pointer"
        onClick={taskDetailClosed}>閉じる</button>
    </div>
  );
}

export default TaskDetail;