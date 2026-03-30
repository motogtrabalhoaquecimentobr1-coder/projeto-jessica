"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/config';

export default function ActivityCard({ activity }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20me%20interessei%20pela%20atividade:%20${encodeURIComponent(activity.name)}`;

  // Support both 'images' (array) and legacy 'image' (string)
  const images = activity.images || (activity.image ? [activity.image] : []);
  const hasMultiple = images.length > 1;

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
    setCurrentIndex(index);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    const idx = Math.round(scrollRef.current.scrollLeft / width);
    setCurrentIndex(idx);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col">
      
      {/* ── Carrossel de Imagens ── */}
      <div className="relative overflow-hidden rounded-t-3xl">
        {/* Scroll container */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.length > 0 ? images.map((src, i) => (
            <div key={i} className="snap-start shrink-0 w-full relative h-52">
              <Image
                src={src}
                alt={`${activity.name} – imagem ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          )) : (
            <div className="snap-start shrink-0 w-full h-52 bg-gradient-to-tr from-[#FDE8F3] to-[#E7F6FD] flex items-center justify-center">
              <span className="text-5xl opacity-30">📚</span>
            </div>
          )}
        </div>

        {/* Badge de categoria */}
        <div className="absolute top-4 right-4 z-10 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#6366F1] shadow-sm">
          {activity.category}
        </div>

        {/* Setas de navegação — visíveis apenas quando há mais de 1 imagem */}
        {hasMultiple && (
          <>
            <button
              onClick={() => scrollTo(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md disabled:opacity-30 transition-opacity hover:bg-white active:scale-95"
              aria-label="Imagem anterior"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo(Math.min(images.length - 1, currentIndex + 1))}
              disabled={currentIndex === images.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md disabled:opacity-30 transition-opacity hover:bg-white active:scale-95"
              aria-label="Próxima imagem"
            >
              <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Indicadores de bolinha */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'w-5 h-2 bg-white'
                    : 'w-2 h-2 bg-white/50'
                }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Contador de fotos */}
        {hasMultiple && (
          <div className="absolute top-4 left-4 z-10 bg-black/40 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* ── Conteúdo do Card ── */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-[#3730A3] mb-2 group-hover:text-[#6366F1] transition-colors leading-snug">
          {activity.name}
        </h3>
        {/* Descrição ou lista de detalhes */}
        {activity.details && activity.details.length > 0 ? (
          <ul className="mb-5 flex flex-col gap-1.5 flex-grow">
            {activity.details.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-0.5 text-[#25D366] shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm mb-5 line-clamp-3 flex-grow">
            {activity.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-auto gap-3">
          <div>
            <span className="text-xs text-gray-400 block leading-none mb-0.5">por apenas</span>
            <span className="text-2xl font-black text-gray-800 tracking-tight">
              R$ {activity.price.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-md shadow-[#25D366]/30 hover:bg-[#1ebd59] hover:shadow-lg active:scale-95 transition-all"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
}
