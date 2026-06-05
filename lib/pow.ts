/** Proof-of-Work helpers — no external dependencies, uses browser crypto.subtle. */

export const POW_DIFFICULTY = 3  // hex prefix length: "000" = 1/4096 probability, ~100-300ms on modern hw

export function makePowChallenge(): string {
  const rand = Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
  return `${Date.now()}-${rand}`
}

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * Find nonce s.t. SHA256(`${challenge}:${nonce}`) starts with `difficulty` hex zeros.
 * Yields to the macrotask queue every 500 iterations to keep the UI responsive.
 * Returns -1 if no solution found within 2M iterations (should never happen in practice).
 */
export async function solvePoW(challenge: string, difficulty = POW_DIFFICULTY): Promise<number> {
  const prefix = '0'.repeat(difficulty)
  for (let nonce = 0; nonce < 2_000_000; nonce++) {
    if (nonce % 500 === 0) await new Promise<void>(r => setTimeout(r, 0))
    if ((await sha256Hex(`${challenge}:${nonce}`)).startsWith(prefix)) return nonce
  }
  return -1
}

export async function verifyPoW(challenge: string, nonce: number, difficulty = POW_DIFFICULTY): Promise<boolean> {
  if (nonce < 0) return false
  const hash = await sha256Hex(`${challenge}:${nonce}`)
  return hash.startsWith('0'.repeat(difficulty))
}
