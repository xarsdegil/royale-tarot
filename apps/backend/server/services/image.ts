import * as htmlToImage from 'html-to-image'
import GIFEncoder from 'gifencoder'
import { createCanvas } from 'canvas'

// Placeholder for image/GIF generation logic
export async function generateImage(data: any) {
  console.log('Generating image for:', data)
  // In-depth logic will be added here
  const canvas = createCanvas(1080, 1920)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 1080, 1920)
  ctx.fillStyle = 'black'
  ctx.font = '50px Sans'
  ctx.fillText('Placeholder Image', 350, 960)
  return canvas.toBuffer('image/png')
}

export async function generateGif(data: any) {
  console.log('Generating GIF for:', data)
  // In-depth logic will be added here
  const encoder = new GIFEncoder(1080, 1920)
  encoder.start()
  encoder.setRepeat(0)
  encoder.setDelay(500)
  encoder.setQuality(10)

  const canvas = createCanvas(1080, 1920)
  const ctx = canvas.getContext('2d')

  // Frame 1
  ctx.fillStyle = 'white'
  ctx.fillRect(0, 0, 1080, 1920)
  ctx.fillStyle = 'black'
  ctx.font = '50px Sans'
  ctx.fillText('Frame 1', 450, 960)
  encoder.addFrame(ctx)

  // Frame 2
  ctx.fillStyle = 'lightblue'
  ctx.fillRect(0, 0, 1080, 1920)
  ctx.fillStyle = 'black'
  ctx.font = '50px Sans'
  ctx.fillText('Frame 2', 450, 960)
  encoder.addFrame(ctx)

  encoder.finish()
  return encoder.out.getData()
}
