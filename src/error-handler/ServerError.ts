export class ServerError extends Error {
  message: string
  status: number | undefined

  constructor ({
    message,
    status
  }: {
    message: string
    status?: number
  }) {
    super()
    this.message = message
    this.status = status
  }
}
