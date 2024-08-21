
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Roboto } from "next/font/google";
import "../../tailwind.config";
import "./globals.css";
const roboto = Roboto({ weight:['100', '300', '400', '500', '700', '900'], subsets:['latin']});

export const metadata: Metadata = {
  title: "Estrutural Eventos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
