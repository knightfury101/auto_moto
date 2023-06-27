import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Auto Rental Showcase By Aditya Singh Rajput',
  description: 'Developed By Aditya Singh Rajput',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
