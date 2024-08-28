import type { Metadata } from 'next';
import Toolbar from '@/UI/Toolbar/Toolbar';
import { montserrat } from '../../fontConfig';
import '../styles/global.scss';
import NextTopLoader from 'nextjs-toploader';
import StoreProvider from '@/app/StoreProvider';
import ScrollToTop from '@/lib/scrollToTop';

export const metadata: Metadata = {
  title: 'Umbrella Agency',
  description:
    'Предлагаем комплексный анализ вашего бизнеса и индивидуальные стратегии для PPC, SEO и других ключевых направлений',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextTopLoader zIndex={100000} color={'#00a1af'} showSpinner={false} />
        <StoreProvider>
          <Toolbar />
          <ScrollToTop />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
