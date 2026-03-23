import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Professora Nome | Atividades Pedagógicas",
  description: "Catálogo de atividades pedagógicas criativas e lúdicas prontas para impressão e uso em sala de aula.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
