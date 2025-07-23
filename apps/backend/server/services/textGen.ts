import { pipeline } from '@xenova/transformers'

// This is a placeholder. In a real scenario, the model would be loaded once.
export async function generate(card: any, position: string) {
  try {
    const generator = await pipeline(
      'text-generation',
      'Xenova/distilgpt2',
    )
    const prompt = `${card.name} card appeared in the ${position} position. Its meaning is:`
    const out = await generator(prompt, { max_new_tokens: 40 })
    if (Array.isArray(out) && out.length > 0 && 'generated_text' in out[0]) {
      return out[0].generated_text
    }
    return 'The cards are silent on this matter.'
  } catch (error) {
    console.error('Error during text generation:', error)
    return 'A mysterious silence...'
  }
}
