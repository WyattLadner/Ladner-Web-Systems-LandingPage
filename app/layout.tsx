import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ladner Web Systems | Websites & Lead Capture Systems',
  description:
    'Web systems that help local businesses capture more leads. We build websites, quote request systems, and appointment-request workflows.',
  icons: {
    icon: '/Ladner_Systems_Logo_favicon_ready.png',
    shortcut: '/Ladner_Systems_Logo_favicon_ready.png',
    apple: '/Ladner_Systems_Logo_favicon_ready.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased relative min-h-screen">
        <div className="fixed inset-0 -z-10 overflow-hidden bg-background pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-orb-float" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] mix-blend-screen animate-orb-float-reverse" />
        </div>

        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}