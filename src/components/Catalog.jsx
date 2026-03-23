"use client";

import { useState, useMemo } from 'react';
import FilterBar from './FilterBar';
import ActivityCard from './ActivityCard';
import { activities } from '@/data/activities';

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [isAnimating, setIsAnimating] = useState(false);

  // Extract unique categories dynamically
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
    <section id="atividades" className="py-20 bg-pastel-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-main-text sm:text-4xl">
            Nosso <span className="text-pastel-pink">Catálogo</span>
          </h2>
          <p className="mt-4 text-xl text-main-sec max-w-2xl mx-auto">
            Explore nossas atividades pedagógicas divididas por categorias e encontre o material ideal para sua turma.
          </p>
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
              <p className="text-xl text-main-sec">Nenhuma atividade encontrada nesta categoria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
