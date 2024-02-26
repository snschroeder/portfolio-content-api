import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../../../connection'

import type { Knex } from 'knex'
import type { User } from '../../../types'

const AuthService = {
  getUser: (db: Knex, email: string) => db('user')
    .select(
      'id',
      'email',
      'password'
    )
    .where({ email })
    .first(),

  validatePassword: async (db: Knex, email: string, password: string) => {
    const user = await AuthService.getUser(db, email)
    const match = await bcrypt.compare(password, user.password as string)
    return match
  },

  createJWT: (subject: string, payload: User) => jwt.sign(payload, JWT_SECRET, {
    subject,
    expiresIn: '180d'
  }),

  verifyJWT: (token: string) => jwt.verify(token, JWT_SECRET)
}

export { AuthService }
