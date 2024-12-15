import { Router } from 'express';

const router = Router();

// CREATE tweet
router.post('/', (req, res) => {
    res.status(501).json({error: 'Not implemented'})
})

// LIST tweets
router.get('/', (req, res) => {
    res.status(501).json({error: 'Not implemented'})
})

// GET one tweet
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented ${id}`})
})

// UPDATE tweet
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented ${id}`})
})

// DELETE tweet
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented ${id}`})
})

export default router;