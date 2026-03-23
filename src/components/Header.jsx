import Link from 'next/link';
import { WHATSAPP_NUMBER } from '@/config';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-pastel-bg/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-main-text">
              Professora <span className="text-pastel-pink">Nome</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-main-sec hover:text-pastel-pink transition-colors font-medium">Início</Link>
            <Link href="#sobre" className="text-main-sec hover:text-pastel-pink transition-colors font-medium">Sobre</Link>
            <Link href="#atividades" className="text-main-sec hover:text-pastel-pink transition-colors font-medium">Atividades</Link>
          </nav>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50 flex items-center justify-center animate-bounce group"
        aria-label="Contato WhatsApp"
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.066.376-.043c.101-.109.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.564 0 5.826-4.739 10.563-10.561 10.563z"/>
        </svg>
      </a>
    </header>
  );
}
