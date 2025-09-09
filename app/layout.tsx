import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { Nunito, Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  display: 'swap',
  subsets: ['latin'],
});

const nunitoSans = Nunito_Sans({
  variable: '--font-nunito-sans',
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} ${nunitoSans.variable} antialiased bg-green-100`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
