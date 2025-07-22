import { Router } from 'express';
import fetch from 'node-fetch';

const router = Router();

router.get('/player/:tag/chests', async (req, res) => {
  const { tag } = req.params;
  const token = process.env.CR_TOKEN;
  try {
    const resp = await fetch(`https://api.clashroyale.com/v1/players/%23${tag}/chests`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chests' });
  }
});

export default router;
