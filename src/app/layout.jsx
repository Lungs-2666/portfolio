import { Geist, Geist_Mono, Stack_Sans_Notch } from "next/font/google";
import "./globals.css";

import NavBar from "@/components/NavBar/NavBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const stackSansNotch = Stack_Sans_Notch({
  // variable: '--font-stack-sans-notch',
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: 'Тимофей Столяров | Разработчик',
  description: 'Тимофей Столяров - разработчик, веб-инженер, программист. Создаю веб-приложения под ключ. 15 лет, гю Пятигорск',
  keywords: [ 
    'веб-разработчик',
    'frontend разработчик',
    'fullstack разработчик',
    'React разработчик',
    'Next.js разработчик'
  ],
  authors: [ 
    { 
      name: 'Тимофей Столяров',
      url: 'https://example.com' 
    } 
  ],
  creator: 'Тимофей Столяров',
  publisher: 'Тимофей Столяров',
  generator: 'Next.js', 
  applicationName: 'Портфолио Тимофея Столярова',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={stackSansNotch.className}>
      <body>
        {/* <NavBar /> */}
        
        {children}
      </body>
    </html>
  );
}
