import Link from 'next/link';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-pastel-pink/20 via-pastel-bg to-pastel-blue/20 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-main-text tracking-tight mb-6">
          Atividades criativas prontas <br className="hidden sm:block" />
          <span className="text-pastel-pink">para sua sala de aula</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-main-sec mb-10">
          Materiais pedagógicos pensados com carinho para facilitar o seu dia a dia e encantar seus alunos.
        </p>
        <Link 
          href="#atividades" 
          className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-pastel-pink hover:bg-opacity-90 hover:scale-105 transition-all duration-300"
        >
          Ver Atividades
        </Link>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-pastel-violet/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-pastel-pink/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/3 w-64 h-64 bg-pastel-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
}
