import { Router } from 'express';

const router = Router();

// CREATE users
router.post('/', (req, res) => {
    res.status(501).json({error: 'Not implemented'})
})

// LIST users
router.get('/', (req, res) => {
    res.status(501).json({error: 'Not implemented'})
})

// GET one user
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented ${id}`})
})

// UPDATE user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented ${id}`})
})

// DELETE user
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({error: `Not implemented ${id}`})
})

export default router;