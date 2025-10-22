export default function ImageModal({ img, onClose, onDelete }) {
  if (!img) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl">
          <div className="card overflow-hidden">
            <div className="relative">
              <img src={img.src} alt={img.title} className="w-full max-h-[80vh] object-contain bg-black" />
              <div className="absolute left-4 top-4 space-y-2">
                <span className="px-2 py-1 rounded-full bg-white/90 text-xs">{img.category}</span>
                <div className="text-white/95 font-semibold drop-shadow">{img.title}</div>
              </div>
              <button
                onClick={() => onDelete(img.id)}
                className="absolute right-4 bottom-4 px-4 py-2 rounded-lg bg-red-500 text-white shadow-soft hover:bg-red-600"
                title="Supprimer cette image"
              >
                🗑️ Supprimer
              </button>
              <button
                onClick={onClose}
                className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-2 hover:bg-white"
                title="Fermer"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
