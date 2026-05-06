'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { GraciasAnalytics } from '@/components/gracias-analytics'

function primerNombre(completo: string): string {
  const p = completo.trim().split(/\s+/)[0]
  if (!p) return ''
  return p.charAt(0).toLocaleUpperCase('es') + p.slice(1).toLocaleLowerCase('es')
}

export function GraciasView() {
  const searchParams = useSearchParams()
  const nombreCompleto = searchParams.get('nombre')?.trim() ?? ''
  const telefono = searchParams.get('telefono')?.trim() ?? ''
  const saludo = primerNombre(nombreCompleto)
  const personalizado = Boolean(saludo || telefono)

  const titulo = saludo
    ? `¡Gracias, ${saludo}!`
    : '¡Gracias! Hemos recibido su información'

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <GraciasAnalytics />
      <header className="border-b border-border bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <Link href="/" className="inline-block">
            <img
              src="/images/design-mode/GlobalExpressRecruiting_Color.png"
              alt="Global Express Recruiting"
              className="h-10 sm:h-12 w-auto"
              width={200}
              height={48}
            />
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="max-w-lg w-full text-center space-y-6">
          <div className="mx-auto w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary font-oswald">{titulo}</h1>
          {personalizado ? (
            <div className="text-muted-foreground text-sm sm:text-base leading-relaxed space-y-3 text-left sm:text-center">
              <p>
                Hemos registrado su solicitud correctamente. Un asesor de{' '}
                <span className="text-foreground font-medium">Global Express Recruiting</span> se comunicará con usted
                pronto para continuar con su proceso migratorio.
              </p>
              {telefono ? (
                <p className="rounded-2xl bg-white border border-border px-4 py-3 text-foreground">
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Le escribirán o llamarán a
                  </span>
                  <span className="font-oswald text-lg font-semibold text-primary">{telefono}</span>
                </p>
              ) : null}
            </div>
          ) : (
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Un asesor de Global Express Recruiting se pondrá en contacto con usted pronto para continuar con su
              proceso migratorio.
            </p>
          )}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full !bg-white text-primary !border-2 !border-primary font-bold shadow-sm hover:!bg-primary/5 hover:text-primary"
            >
              <Link href="/">Volver al inicio</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
