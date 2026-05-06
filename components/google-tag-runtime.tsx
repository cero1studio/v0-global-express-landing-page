'use client'

import { useEffect } from 'react'
import { GA_MEASUREMENT_ID } from '@/lib/site-config'

/**
 * Refuerza la depuración con Tag Assistant / GA4 DebugView:
 * - Añade ?gtm_debug=1 o ?tag_assistant=1 a la URL, o
 * - localStorage gtag_debug = "1"
 *
 * "No conectado" en Tag Assistant suele resolverse abriendo el sitio desde el flujo
 * "Conectar" del asistente y usando Chrome con extensión Tag Assistant Companion.
 */
export function GoogleTagRuntime() {
  useEffect(() => {
    const gaId = GA_MEASUREMENT_ID.trim()
    if (!gaId || typeof window === 'undefined') return

    let cancelled = false
    const run = () => {
      if (cancelled) return
      const w = window as unknown as { gtag?: (...args: unknown[]) => void }
      if (!w.gtag) {
        requestAnimationFrame(run)
        return
      }
      const q = window.location.search
      const debug =
        /[?&]gtm_debug=/i.test(q) ||
        /[?&]tag_assistant=/i.test(q) ||
        /[?&]_dbg=/i.test(q) ||
        /[?&]gtag_debug=/i.test(q) ||
        /^true$/i.test(window.localStorage.getItem('gtag_debug') ?? '')

      if (debug) {
        w.gtag('config', gaId, { debug_mode: true })
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [])

  return null
}
