export default function FilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-3 mb-10 justify-center">
      <button
        onClick={() => onSelectCategory('Todas')}
        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
          activeCategory === 'Todas'
            ? 'bg-pastel-pink text-white shadow-md'
            : 'bg-white text-main-sec border border-gray-200 hover:border-pastel-pink hover:text-pastel-pink'
        }`}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
            activeCategory === category
              ? 'bg-pastel-pink text-white shadow-md'
              : 'bg-white text-main-sec border border-gray-200 hover:border-pastel-pink hover:text-pastel-pink'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
