function Sidebar(){
    return(
             <aside className="w-64 min-h-screen bg-zinc-950 text-white p-6">
      
      <h1 className="text-2xl font-bold text-green-500 mb-10">
        🎵 TuneFlow
      </h1>

      <nav className="space-y-4">
        <a
          href="#"
          className="block text-gray-300 hover:text-white"
        >
          🏠 Home
        </a>

        <a
          href="#"
          className="block text-gray-300 hover:text-white"
        >
          🔍 Search
        </a>

        <a
          href="#"
          className="block text-gray-300 hover:text-white"
        >
          📚 Your Library
        </a>
      </nav>

      <div className="mt-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase">
          Playlists
        </h2>

        <button className="mt-4 text-gray-300 hover:text-white">
          + Create Playlist
        </button>
      </div>

    </aside>
    );
}
export default Sidebar;