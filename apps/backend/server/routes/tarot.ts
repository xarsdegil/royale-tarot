import { Router, type Request, type Response } from 'express'
import { rateLimit } from 'express-rate-limit'

const router = Router()

const tarotLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 15, // Limit each IP to 15 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after a minute',
})

router.post('/', tarotLimiter, (req: Request, res: Response) => {
  const { tag, spread } = req.body

  if (!tag) {
    return res.status(400).json({ error: 'Player tag is required' })
  }

  // Placeholder response
  res.status(200).json({
    message: 'Tarot reading generated successfully',
    tag,
    spread: spread || '3-card',
  })
})

router.get('/cards', (req: Request, res: Response) => {
  // Placeholder for fetching cached card list
  res.status(200).json({ message: 'Card list fetched successfully' })
})

export default router
