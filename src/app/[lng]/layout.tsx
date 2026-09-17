import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ChatbotWidget from '@/components/chatbot/chatbot-widget';
import { languages } from '@/i18n/settings';
import { dir } from 'i18next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'RICE Bharat',
  description: 'Empowering Bharat’s Small Farmers with Smart Tools, Storage & Markets.',
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <Header lng={lng} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer lng={lng} />
        <ChatbotWidget />
        <Toaster />
      </body>
    </html>
  );
}
