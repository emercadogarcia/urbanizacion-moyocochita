import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urbanización Moyocochita | Inversión en Camargo",
  description: "Lotes de terreno en Camargo, Chuquisaca. Listos para invertir y vivir en la Urbanización Moyocochita.",
  icons: {
    icon: "/urbanizacion-moyocochita.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="text-slate-900">
        {children}
      </body>
    </html>
  );
}
