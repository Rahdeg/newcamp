import Image from 'next/image'
import Button from './components/ux/Button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Button>
        <Link href='/dashboard'>
        Visit the Dashboard
        </Link>
        </Button>
    </main>
  )
}
