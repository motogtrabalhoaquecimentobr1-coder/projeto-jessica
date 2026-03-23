import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              <span className="text-[#9D3855]">Profa</span> <span className="text-[#6366F1]">Jéssica Belão</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="#inicio" className="text-gray-400 hover:text-[#3730A3] transition-colors font-semibold">Início</Link>
            <Link href="#sobre" className="text-gray-400 hover:text-[#3730A3] transition-colors font-semibold">Sobre</Link>
            <Link href="#atividades" className="text-gray-400 hover:text-[#3730A3] transition-colors font-semibold">Atividades</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
