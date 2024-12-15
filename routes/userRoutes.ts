import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// CREATE users
router.post('/', async (req, res) => {
    const { email, name, userName } = req.body;

    try {
        const result = await prisma.user.create({
            data: {
                email,
                name,
                userName,
                bio: "Hey. I use Twitter"
            },
        });
        res.json(result)
    } catch (e) {
        res.status(400).json({ error: 'Username and email should be unique' });
    }
})

// LIST users
router.get('/', async (req, res) =>{
    const allUsers = await prisma.user.findMany();

    res.json(allUsers);
})

// GET one user
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
        where: {id: Number(id)}
    })
    res.json(user);
})

// UPDATE user
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { bio, userName, image, name } = req.body;

    try {
        const result = await prisma.user.update({
            where: { id: Number(id) },
            data: {
                bio, userName, image, name
            }
        });

        res.json(result);
    } catch (e){
        res.sendStatus(400).json({error: `Failed to update user`})
    }
})

// DELETE user
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.user.delete({
            where: { id: Number(id) }
        })

        res.status(201).json({msg: "User deleted successfully"})
    } catch (e){
        res.status(400).json({error: 'User does not exist'})
    }
});

export default router;