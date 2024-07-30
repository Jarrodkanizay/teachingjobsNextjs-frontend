import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QueryProvider from '@/lib/store/query-provider';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Script from 'next/script';
// import { GoogleAnalytics } from '@next/third-parties/google';
const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: {
    default: 'The Best Teaching Jobs', //Default if nothing is set
    template: '%s | Teaching Jobs', //If the title is set on the page the %s will be replaced with the title
  },
  description: "Teaching Jobs the worlds' number 1 job board",
  icons: {
    icon: '/favicon.png',
  },
  robots: {
    index: true,
    googleBot: {
      index: true,
    },
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                   (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "mt7ng9ijrf");
                `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        <QueryProvider>
          <Header />
          {children}
          <div className="spacer">&nbsp;</div>
          <Footer />
        </QueryProvider>
      </body>
      <GoogleAnalytics />
    </html>
  );
}
