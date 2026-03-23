import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/config';

export default function ActivityCard({ activity }) {
  // A URL contém o placeholder que você deve substituir se não usar o config.js, 
  // mas aqui já estamos injetando o WHATSAPP_NUMBER do config.
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20me%20interessei%20por%20uma%20atividade%20em%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es:%20${encodeURIComponent(activity.name)}`;

  return (
    <a 
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
    >
      <div className="relative h-[200px] w-full bg-pastel-bg flex items-center justify-center overflow-hidden">
        {/* Placeholder para quando não há imagem real na pasta public/images */}
        <div className="absolute inset-0 bg-pastel-violet/10 flex items-center justify-center z-0">
          <span className="text-6xl opacity-20">📚</span>
        </div>
        
        {activity.image && (
          <Image 
            src={activity.image} 
            alt={activity.name} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 z-10" 
            onError={(e) => e.target.style.display = 'none'}
          />
        )}
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-pastel-violet shadow-sm z-20">
          {activity.category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-main-text mb-2 group-hover:text-pastel-pink transition-colors">
          {activity.name}
        </h3>
        <p className="text-main-sec text-sm mb-4 line-clamp-2">
          {activity.description}
        </p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-extrabold text-main-text">
            R$ {activity.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="inline-block bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold shadow-md group-hover:bg-[#20BE5C] transition-colors">
            Comprar via WhatsApp
          </span>
        </div>
      </div>
    </a>
  );
}
