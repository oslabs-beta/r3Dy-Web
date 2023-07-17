import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../../components/Navigation'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'R3DY UI',
  description: 'Interactive 3D React Components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="en">
      <body className={`${inter.className} pt-14 bg-white dark:darkmode-backround`} suppressHydrationWarning={true}>
      <Navigation/>
          {children}
      </body>
    </html>
  )
}
