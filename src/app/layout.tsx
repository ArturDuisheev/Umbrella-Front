import type { Metadata } from 'next';
import Toolbar from '@/UI/Toolbar/Toolbar';
import { montserrat } from '../../fontConfig';
import '../styles/global.scss';
import NextTopLoader from 'nextjs-toploader';
import StoreProvider from '@/app/StoreProvider';
import ScrollToTop from '@/lib/scrollToTop';
import WhatsAppIcon from '@/components/Whatsapp/Whatsapp';

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
      <head>
        <title>Umbrella Agency</title>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KPNDNM9P');`
        }} />
        {/* End Google Tag Manager */}
      </head>
      <body className={montserrat.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPNDNM9P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <NextTopLoader zIndex={100000} color={'#00a1af'} showSpinner={false} />
        <StoreProvider>
          <Toolbar />
          <ScrollToTop />
          <WhatsAppIcon />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
