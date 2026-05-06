/** Clave temporal para pasar email/teléfono a /gracias (conversiones avanzadas). Se borra al leer. */
export const GE_LEAD_EC_KEY = '__ge_lead_ec_v1'

export type LeadEcPayload = {
  email: string
  /** E.164, ej. +573011234567 */
  phoneE164: string
}

export async function sha256HexUtf8(value: string): Promise<string> {
  const data = new TextEncoder().encode(value)
  const buf = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/** Email normalizado para hashing (Google). */
export function normalizeEmailForHash(email: string): string {
  return email.trim().toLowerCase()
}

/** Teléfono a E.164 mínimo: + y solo dígitos en código país + número. */
export function toPhoneE164(countryCode: string, phoneDigits: string): string {
  const code = countryCode.replace(/\D/g, '')
  const num = phoneDigits.replace(/\D/g, '')
  if (!code || !num) return ''
  return `+${code}${num}`
}
