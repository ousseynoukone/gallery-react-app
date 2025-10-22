export default function Sidebar({ categories, current, onChange }) {
  return (
    <aside className="sticky top-6 h-screen w-60 shrink-0 rounded-2xl bg-white shadow-md p-4 overflow-auto">
      <h2 className="text-lg font-semibold mb-3">Catégories</h2>
      <div className="flex flex-col gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`px-3 py-2 text-left rounded-lg transition-colors ${
              current === cat 
                ? 'bg-blue-500 text-white hover:bg-blue-600' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </aside>
  );
}