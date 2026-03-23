"use client";

import { useState, useMemo } from 'react';
import FilterBar from './FilterBar';
import ActivityCard from './ActivityCard';
import { activities } from '@/data/activities';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = useMemo(() => {
    const allCategories = activities.map(a => a.category);
    return [...new Set(allCategories)].sort();
  }, []);

  const filteredActivities = useMemo(() => {
    if (activeCategory === 'Todas') return activities;
    return activities.filter(activity => activity.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsAnimating(false);
    }, 200);
  };

  return (
    <section id="atividades" className="py-20 bg-[#FAFAFA] relative border-t border-gray-100">
      
      {/* Marcador Direcional entre as seções identico a imagem */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white shadow-md border-[6px] border-white cursor-pointer hover:bg-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-[#3730A3] mb-2">
            Catálogo de atividades
          </h2>
          <p className="text-gray-500 font-medium">Explore nossos conteúdos</p>
        </div>

        <FilterBar 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={handleCategoryChange} 
        />

        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {filteredActivities.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map((activity) => (
                <ActivityCard key={activity.id} activity={activity} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">Nenhuma atividade encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
