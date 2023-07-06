import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <nav  >
        <div>
          <Link href="/docs">Docs</Link>
          <div>About us</div>
        </div>
        <div>
          <div>Darkmode </div>
          <div>Github</div>
        </div>
      </nav>
    </main>

   
  )
}
