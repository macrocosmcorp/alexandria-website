import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'THE ALEXANDRIA INDEX',
  description: 'From barbarism to civilization requires a century; from civilization to barbarism needs but a day.',
  openGraph: {
    title: 'THE ALEXANDRIA INDEX',
    description: 'From barbarism to civilization requires a century; from civilization to barbarism needs but a day.',
    url: 'https://alex.macrocosm.so',
    siteName: 'THE ALEXANDRIA INDEX',
    images: [
      {
        url: 'https://alex.macrocosm.so/static/AlexOG.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE ALEXANDRIA INDEX',
    description: 'From barbarism to civilization requires a century; from civilization to barbarism needs but a day.',
    siteId: '1515531815594864640',
    creator: '@macrocosmcorp',
    creatorId: '1515531815594864640',
    images: ['https://alex.macrocosm.so/static/AlexOG.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
