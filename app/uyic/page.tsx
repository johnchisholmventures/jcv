import Container from '@/components/Container'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Unleash Your Inner Company',
}

export default function UyicPage() {
  return (
    <Container>
      <h1 className="post-title">Unleash Your Inner Company</h1>
    </Container>
  )
}
