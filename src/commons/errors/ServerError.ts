export class ServerError extends Error
{
  constructor(stack: string)
  {
    super('This server failed')
    this.name = 'ServerError'
    this.stack = stack
  }
}