import type { Metadata } from 'next'
import { Suspense } from 'react'
import { SITE_URL } from '@/lib/site-config'
import { GraciasView } from './gracias-view'

export const metadata: Metadata = {
  title: 'Gracias — Hemos recibido su solicitud',
  description:
    'Su información fue enviada correctamente. Un asesor de Global Express Recruiting se pondrá en contacto pronto.',
  alternates: {
    canonical: `${SITE_URL.replace(/\/$/, '')}/gracias`,
  },
}

function GraciasFallback() {
  return (
    <div className="min-h-screen bg-background flex flex-col animate-pulse">
      <header className="border-b border-border bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 flex justify-center">
          <div className="h-12 w-48 rounded bg-muted" />
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="mx-auto w-20 h-20 rounded-full bg-muted" />
          <div className="h-8 max-w-xs mx-auto rounded bg-muted" />
          <div className="h-20 rounded-xl bg-muted" />
        </div>
      </main>
    </div>
  )
}

export default function GraciasPage() {
  return (
    <Suspense fallback={<GraciasFallback />}>
      <GraciasView />
    </Suspense>
  )
}
