import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="pt-16 pb-12 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar Circular roxo igual o da foto */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-[#E9D5FF] shadow-lg">
              <Image
                src="/images/profile.jpg"
                alt="Professora Jéssica Belão"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h2 className="text-3xl font-extrabold text-[#3730A3] mb-4">
              Olá, eu sou a Professora Jéssica Belão!
            </h2>
            <p className="text-lg text-gray-500 font-medium leading-relaxed">
              Há mais de 15 anos em sala de aula, criei atividades que realmente funcionam. Cada material é pensado para tornar o aprendizado mais divertido e significativo para os seus alunos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
