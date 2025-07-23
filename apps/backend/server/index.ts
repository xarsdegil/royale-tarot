import express, { type Request, type Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import tarotRoutes from './routes/tarot'

dotenv.config()

const app = express()
const port = process.env.PORT ?? 4000

app.use(cors())
app.use(express.json())

app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api/tarot', tarotRoutes)

app.listen(port, () => {
  console.log(`&#x1F680; Server is running at http://localhost:${port}`)
})

export default app
