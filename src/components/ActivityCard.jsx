import Image from 'next/image';
import { WHATSAPP_NUMBER } from '@/config';

export default function ActivityCard({ activity }) {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%20me%20interessei%20por%20uma%20atividade:%20${encodeURIComponent(activity.name)}`;

  return (
    <a 
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 relative"
    >
      <div className="relative h-48 w-full flex items-center justify-center p-6 border-b border-gray-50">
        {/* Usando gradiente pastel identico do titulo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#FDE8F3] to-[#E7F6FD] opacity-20"></div>
        
        {activity.image ? (
          <Image 
            src={activity.image} 
            alt={activity.name} 
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 z-10" 
            onError={(e) => e.target.style.display = 'none'}
          />
        ) : (
          <div className="relative z-10 w-24 h-24 bg-white/60 backdrop-blur rounded-2xl shadow-sm flex items-center justify-center rotate-3 group-hover:-rotate-3 transition-transform">
            <span className="text-4xl">📚</span>
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-20">
          <span className="bg-white/95 px-4 py-1.5 rounded-full text-xs font-bold text-[#6366F1] shadow-sm">
            {activity.category}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-[#3730A3] mb-3 group-hover:text-[#6366F1] transition-colors">
          {activity.name}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2">
          {activity.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-black text-gray-800 tracking-tight">
            R$ {activity.price.toFixed(2).replace('.', ',')}
          </span>
          <span className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md shadow-[#25D366]/30 group-hover:bg-[#1ebd59] group-hover:shadow-lg transition-all">
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.109.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.564 0 5.826-4.739 10.563-10.561 10.563z"/>
            </svg>
            Comprar
          </span>
        </div>
      </div>
    </a>
  );
}
