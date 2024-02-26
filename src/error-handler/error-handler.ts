import { NODE_ENV } from '../../connection'
import type { Request, Response } from 'express'
import type { ServerError } from './ServerError'

function errorHandler (error: ServerError, req: Request, res: Response): void {
  const status = error.status ?? 500
  const response = NODE_ENV === 'production'
    ? error.message = 'server error'
    : error.message
  res.status(status).json(response)
}

export default errorHandler
