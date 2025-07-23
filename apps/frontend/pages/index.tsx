import { useState } from 'react'
import Head from 'next/head'
import { Input } from '@/components/components/ui/input'
import { Button } from '@/components/components/ui/button'

export default function HomePage() {
  const [tag, setTag] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    if (!tag) {
      setError('Please enter a player tag.')
      return
    }
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/tarot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tag }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'An unknown error occurred.')
      }

      const result = await response.json()
      // TODO: Handle successful response and navigation
      console.log(result)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Royale Tarot</title>
        <meta name="description" content="Read your destiny from the chests!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 text-center">
        <h1 className="text-5xl font-bold mb-2">
          Royale Tarot
        </h1>
        <p className="text-xl mb-8">
          Kaderini Sandıklardan Oku!
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <Input
            type="text"
            value={tag}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTag(e.target.value.toUpperCase())
            }
            placeholder="#PLAYERTAG"
            className="mb-4 text-center text-lg bg-gray-800 border-gray-700"
            disabled={loading}
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Reading the cards...' : 'Get My Reading'}
          </Button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </main>
    </div>
  )
}
