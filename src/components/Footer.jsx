function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-xl font-bold text-white">🎬 MovieExplorer</p>
          <p className="text-sm mt-1 text-gray-400">
            Browse and discover movies from around the world.
          </p>
        </div>

        <div className="flex gap-5 text-sm">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-sm text-gray-500">
        © 2026 MovieExplorer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
