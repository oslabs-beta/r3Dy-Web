import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '../../components/Navigation'
import { Providers } from './store/provider'

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
      <body className={`${inter.className} pt-14 bg-white h-full overflow-x-hidden dark:darkmode-background`} suppressHydrationWarning={true}>
      <Navigation/>
      <Providers>
          {children}
       </Providers>
      </body>
    </html>
  )
}
