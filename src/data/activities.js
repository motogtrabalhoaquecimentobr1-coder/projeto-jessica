export const activities = [
  {
    id: 1,
    name: "Alfabeto Pontilhado",
    category: "Português",
    price: 12.90,
    images: [
      "/images/atividades/1-alfabeto-pontilhado/capa.jpg",
      "/images/atividades/1-alfabeto-pontilhado/pagina-1.jpg",
      "/images/atividades/1-alfabeto-pontilhado/pagina-2.jpg",
    ],
    description: "Atividades de cobrir pontilhinhos para treinar a coordenação motora e aprender o alfabeto."
  },
  {
    id: 2,
    name: "Adição Colorida",
    category: "Matemática",
    price: 15.50,
    images: [
      "/images/atividades/2-adicao-colorida/capa.jpg",
      "/images/atividades/2-adicao-colorida/pagina-1.jpg",
    ],
    description: "Folhas de continhas de adição com dinâmicas de colorir para engajar os alunos."
  },
  {
    id: 3,
    name: "Cores e Formas",
    category: "Artes",
    price: 9.90,
    images: [
      "/images/atividades/3-cores-e-formas/capa.jpg",
      "/images/atividades/3-cores-e-formas/pagina-1.jpg",
    ],
    description: "Material lúdico para recortar, colar e identificar cores e formas geométricas básicas."
  },
  {
    id: 4,
    name: "Bingo dos Animais",
    category: "Ciências",
    price: 14.90,
    images: [
      "/images/atividades/4-bingo-dos-animais/capa.jpg",
      "/images/atividades/4-bingo-dos-animais/cartela.jpg",
    ],
    description: "Jogo de bingo completo com 20 cartelas e fichas de sorteio focado em diferentes espécies de animais."
  },
  {
    id: 5,
    name: "Especial Dia das Mães",
    category: "Datas Comemorativas",
    price: 19.90,
    images: [
      "/images/atividades/5-dia-das-maes/capa.jpg",
      "/images/atividades/5-dia-das-maes/cartao.jpg",
      "/images/atividades/5-dia-das-maes/atividade.jpg",
    ],
    description: "Cartões, lembrancinhas e dinâmicas emocionantes para comemorar o Dia das Mães em sala de aula."
  },
  {
    id: 6,
    name: "Fichas de Leitura",
    category: "Português",
    price: 16.90,
    images: [
      "/images/atividades/6-fichas-de-leitura/capa.jpg",
      "/images/atividades/6-fichas-de-leitura/pagina-1.jpg",
    ],
    description: "100 fichas de leitura com sílabas simples e complexas para alunos em fase de alfabetização."
  }
];

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * COMO ADICIONAR UMA NOVA ATIVIDADE:
 *
 * 1. Crie uma pasta em: public/images/atividades/ID-nome-da-atividade/
 *    Exemplo: public/images/atividades/7-tabuada-divertida/
 *
 * 2. Coloque as imagens da atividade dentro dessa pasta.
 *    Nomes sugeridos: capa.jpg, pagina-1.jpg, pagina-2.jpg ...
 *
 * 3. Adicione um novo objeto neste array seguindo o modelo abaixo:
 *
 *  {
 *    id: 7,                              // ID único (incremental)
 *    name: "Tabuada Divertida",          // Nome da atividade
 *    category: "Matemática",             // Categoria (aparece nos filtros)
 *    price: 13.90,                       // Preço em reais
 *    images: [                           // Lista de imagens (pelo menos 1)
 *      "/images/atividades/7-tabuada-divertida/capa.jpg",
 *      "/images/atividades/7-tabuada-divertida/pagina-1.jpg",
 *    ],
 *    description: "Descrição breve."     // Texto curto
 *  },
 *
 * ─────────────────────────────────────────────────────────────────────────────
 */
