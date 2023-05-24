import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'THE ALEXANDRIA INDEX',
  description: 'From barbarism to civilization requires a century; from civilization to barbarism needs but a day. Built by THE MACROCOSM CONSORTIUM',
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
