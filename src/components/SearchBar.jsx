export default function SearchBar({ placeholder = "Rechercher...", value, onChange }) {
  return (
    <div className="w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-soft outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}