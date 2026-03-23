import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-pastel-bg/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-main-text">
              Professora <span className="text-pastel-pink">Jéssica Belão</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#inicio" className="text-main-sec hover:text-pastel-pink transition-colors font-medium">Início</Link>
            <Link href="#sobre" className="text-main-sec hover:text-pastel-pink transition-colors font-medium">Sobre</Link>
            <Link href="#atividades" className="text-main-sec hover:text-pastel-pink transition-colors font-medium">Atividades</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
