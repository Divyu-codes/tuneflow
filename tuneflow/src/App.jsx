import React from 'react';
import './index.css';
import Sidebar from './component/Sidebar';
function App() {
  return (
     <div className="flex min-h-screen bg-zinc-900">
      <Sidebar />

      <main className="flex-1 p-8 text-white">
        <h2 className="text-3xl font-bold">
          Good evening 👋
        </h2>

        <p className="mt-2 text-gray-400">
          What do you want to listen to?
        </p>
      </main>
    </div>
  );
}

export default App;