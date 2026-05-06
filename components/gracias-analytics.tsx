'use client'

import { useEffect } from 'react'
import { GOOGLE_ADS_CONVERSION_SEND_TO } from '@/lib/site-config'
import {
  GE_LEAD_EC_KEY,
  normalizeEmailForHash,
  sha256HexUtf8,
  type LeadEcPayload,
} from '@/lib/google-enhanced-conversions'

const adsConversionSendTo = GOOGLE_ADS_CONVERSION_SEND_TO.trim()

function readLeadEc(): LeadEcPayload | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem(GE_LEAD_EC_KEY)
    if (!raw) return null
    sessionStorage.removeItem(GE_LEAD_EC_KEY)
    const p = JSON.parse(raw) as LeadEcPayload
    if (!p?.email && !p?.phoneE164) return null
    return p
  } catch {
    try {
      sessionStorage.removeItem(GE_LEAD_EC_KEY)
    } catch {
      /* ignore */
    }
    return null
  }
}

export function GraciasAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const w = window as unknown as {
      dataLayer?: Record<string, unknown>[]
      gtag?: (...args: unknown[]) => void
    }
    w.dataLayer = w.dataLayer || []
    w.dataLayer.push({
      event: 'form_lead_complete',
      page_path: '/gracias',
    })

    const lead = readLeadEc()

    ;(async () => {
      const userData: Record<string, string> = {}
      if (lead?.email) {
        const em = normalizeEmailForHash(lead.email)
        if (em) userData.sha256_email_address = await sha256HexUtf8(em)
      }
      if (lead?.phoneE164 && lead.phoneE164.length > 4) {
        userData.sha256_phone_number = await sha256HexUtf8(lead.phoneE164)
      }

      if (adsConversionSendTo && w.gtag) {
        const payload: Record<string, unknown> = {
          send_to: adsConversionSendTo,
        }
        if (Object.keys(userData).length > 0) {
          payload.user_data = userData
        }
        w.gtag('event', 'conversion', payload)
      }
    })().catch(() => {
      if (adsConversionSendTo && w.gtag) {
        w.gtag('event', 'conversion', { send_to: adsConversionSendTo })
      }
    })
  }, [])

  return null
}
