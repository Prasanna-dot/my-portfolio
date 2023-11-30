import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import MediaLink from '@/components/MediaILinks'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prasanna Portfolio'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <MediaLink/>
        <div className='w-full h-auto z-20 relative bg-transparent texture'>
        {children}
        </div>
        <div className='w-full h-[100vh] fixed top-0 left-0 z-0'>
          <div id='float-bool'></div>
        </div>
      </body>
    </html>
  )
}
