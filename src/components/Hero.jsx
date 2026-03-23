import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-r from-[#FDE8F3] via-[#F2EEFA] to-[#E7F6FD] pt-40 pb-24 lg:pt-52 lg:pb-36 overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Badge superior igual a imagem */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#fce4ee] text-[#b45b85] text-sm font-semibold mb-8 shadow-sm">
          <span>✨</span> Materiais pedagógicos
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#3730A3] tracking-tight mb-6 leading-tight">
          Atividades criativas prontas <br className="hidden sm:block" />
          para sua sala de aula
        </h1>
        <p className="mt-4 max-w-xl mx-auto text-xl text-gray-500 mb-12 font-medium">
          Materiais pedagógicos pensados com carinho para facilitar o seu dia a dia e encantar seus alunos.
        </p>
        <Link 
          href="#atividades" 
          className="inline-flex items-center px-10 py-4 border-2 border-white/60 text-lg font-bold rounded-full shadow-sm text-white bg-white/20 backdrop-blur-md hover:bg-white/40 hover:scale-105 transition-all duration-300"
        >
          Ver atividades
        </Link>
      </div>

      {/* Decorative Blur Orbs para suavizar o fundo e deixa-lo vivo */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#f9a8d4]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#93c5fd]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
    </section>
  );
}
