# Projeto Jessica - Catálogo de Atividades Pedagógicas

Este é um projeto Next.js com Tailwind CSS criado para uma professora vender suas atividades pedagógicas.

## 1. Como rodar localmente

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
Abra o terminal na pasta do projeto e rode:

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## 2. Como trocar o número de WhatsApp

Abra o arquivo `src/config.js` e modifique a constante `WHATSAPP_NUMBER`:

```js
export const WHATSAPP_NUMBER = "5511999999999"; // Apenas números, com DDI (55) + DDD + número
```

## 3. Como adicionar/editar atividades

Todas as atividades estão salvas de forma estática no arquivo `src/data/activities.js` (isso elimina a necessidade de banco de dados).
Para adicionar uma nova atividade, basta adicionar um novo objeto ao array `activities`, seguindo o padrão:

```js
{
  id: 7, // Use um ID único
  name: "Nova Atividade Lúdica",
  category: "Matemática", // Novas categorias aparecem nos filtros automaticamente
  price: 15.00,
  image: "/images/nova-atividade.jpg", // Coloque a imagem na pasta public/images/
  description: "Breve descrição do material."
}
```

## 4. Como fazer deploy na Vercel

O projeto está otimizado para a Vercel com geração estática ultrarrápida (SSG).

1. Crie um repositório no [GitHub](https://github.com/) e faça o push de todos os arquivos.
2. Acesse a [Vercel](https://vercel.com/) e faça login usando o GitHub.
3. No painel, clique em "Add New..." > "Project".
4. Importe o repositório que você acabou de criar.
5. Deixe tudo como padrão (a Vercel detecta o Next.js automaticamente) e clique em "Deploy".
6. O processo de build iniciará. Assim que terminar, seu site estará online com um link público (ex: `seu-projeto.vercel.app`).
7. O site atualizará automaticamente sempre que novas alterações (como adição de atividades) forem enviadas para a branch `main` do repositório no GitHub.
