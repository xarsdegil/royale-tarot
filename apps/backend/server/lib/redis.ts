import { createClient } from 'redis'
import 'dotenv/config'

const redisUrl = process.env.REDIS_URL

if (!redisUrl) {
  console.warn('REDIS_URL is not defined. Caching will be disabled.')
}

export const redisClient = redisUrl
  ? createClient({ url: redisUrl })
  : undefined

if (redisClient) {
  redisClient.on('error', (err) => console.error('Redis Client Error', err))
  redisClient.connect().catch(console.error)
}
