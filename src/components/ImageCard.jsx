export default function ImageCard({ img, onOpen, onLike, onDislike, onDelete }) {
  return (
    <div className="card group cursor-pointer">
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={img.src}
          alt={img.title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition"
          onClick={() => onOpen(img)}
        />
        <span className="absolute left-3 top-3 text-xs px-2 py-1 rounded-full bg-white/90 shadow-soft">
          {img.category}
        </span>
      </div>
      <div className="p-3">
        <h3 className="font-semibold">{img.title}</h3>
        <div className="mt-2 flex items-center gap-2">
          <button className="btn" onClick={() => onLike(img.id)} title="J'aime">
            <span>❤️</span>
            <span className="text-sm">{img.likes}</span>
          </button>
          <button className="btn" onClick={() => onDislike(img.id)} title="J'aime pas">
            <span>👎</span>
            <span className="text-sm">{img.dislikes}</span>
          </button>

          <button className="btn" onClick={() => onDelete(img.id)} title="Supprimer">
            <span>🗑️</span>
            <span className="text-sm">Supprimer</span>
          </button>
        </div>
      </div>
    </div>
  );
}
