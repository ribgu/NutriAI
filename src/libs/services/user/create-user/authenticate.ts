import jwt from 'jsonwebtoken'

export function verifyToken(token: string) {
  const JWT_SECRET = process.env.JWT_SECRET!
  try {
    const decoded = jwt.verify(token, JWT_SECRET)

    return decoded as { userId: string }
  } catch (error) {
    throw new Error('Token inválido ou expirado, erro: ' + error)
  }
}

export function authenticate(token: string) {
  const decoded = verifyToken(token)

  return decoded.userId
}
