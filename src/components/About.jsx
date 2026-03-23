export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center flex flex-col-reverse">
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-main-text tracking-tight sm:text-4xl mb-6">
              Oi, sou a Professora <span className="text-pastel-pink">Jéssica Belão</span>!
            </h2>
            <p className="text-lg text-main-sec mb-4">
              Sou apaixonada pela educação infantil e acredito que aprender deve ser uma experiência lúdica, colorida e muito divertida!
            </p>
            <p className="text-lg text-main-sec mb-4">
              Criei este espaço para compartilhar as atividades que desenvolvo com tanto carinho para a minha própria sala de aula. Meu objetivo é ajudar outros professores a pouparem tempo com materiais de alta qualidade, prontos para imprimir e usar.
            </p>
            <p className="text-lg text-main-sec font-medium text-pastel-violet">
              Vamos juntos transformar a educação com criatividade?
            </p>
          </div>
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden shadow-xl border-8 border-pastel-pink/20 bg-pastel-blue/30 flex items-center justify-center">
            {/* Foto Placeholder */}
            <span className="text-pastel-blue text-9xl font-bold opacity-50">👩‍🏫</span>
          </div>
        </div>
      </div>
    </section>
  );
}
