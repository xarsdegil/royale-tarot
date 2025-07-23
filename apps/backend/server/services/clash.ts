import { ClashRoyaleAPI } from '@varandas/clash-royale-api'
import 'dotenv/config'

const token = process.env.CR_API_TOKEN

if (!token) {
  throw new Error('CR_API_TOKEN is not defined in environment variables')
}

export const cra = new ClashRoyaleAPI(token)
