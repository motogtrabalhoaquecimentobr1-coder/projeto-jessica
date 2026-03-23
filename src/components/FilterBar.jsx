export default function FilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap gap-4 mb-14">
      <button
        onClick={() => onSelectCategory('Todas')}
        className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
          activeCategory === 'Todas'
            ? 'bg-[#E9D5FF] text-[#4C1D95] border-transparent shadow-sm'
            : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C4B5FD] hover:text-[#4C1D95]'
        }`}
      >
        Todas
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
            activeCategory === category
              ? 'bg-[#E9D5FF] text-[#4C1D95] border-transparent shadow-sm'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C4B5FD] hover:text-[#4C1D95]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
