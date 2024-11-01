import "./globals.css";

export const metadata = {
  title: "Integração Sementes",
  description: "Descrição da sua página aqui",
  icons: {
    icon: "/logo.png", // O caminho relativo para o seu ícone
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
