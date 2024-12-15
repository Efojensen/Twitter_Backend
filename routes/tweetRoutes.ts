import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { userInfo } from 'os';

const router = Router();
const prisma = new PrismaClient();

// CREATE tweet
router.post('/', async (req, res) => {
    const { content, image, userId } = req.body

    try {
        const result = await prisma.tweet.create({
            data: {
                image,
                userId,
                content,
            },
        });

        res.status(201).json(result)
    } catch (e){
        res.status(404).json({ error: `Something went wrong: ${e}`})
    }
})

// LIST tweets
router.get('/', async (req, res) => {
    try {
        const result = await prisma.tweet.findMany({
            include: {user: {
                select: {
                    id: true,
                    name: true,
                    image: true,
                    userName: true,
                }
            }}
        })

        res.status(200).json(result)
    } catch (e) {
        res.status(400).json({error: `Something went wrong: ${e}`})
    }
})

// GET one tweet
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const locatedTweet = await prisma.tweet.findUnique({
            include: {user: true},
            where: { id: Number(id) },
        })

        if (!locatedTweet){
            res.status(404).json({ error: "Tweet not found"})
            return
        }

        res.status(200).json(locatedTweet)
    } catch (e) {
        res.status(400).json({error: `Something went wrong: ${e}`})
    }
})

// UPDATE tweet
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { content, image } = req.body;

    try {
        const updatedTweet = await prisma.tweet.update({
            where: { id: Number(id) },
            data: {
                image,
                content,
            }
        });

        res.status(201).json(updatedTweet)
    } catch (e) {
        res.status(404).json({error: `Something went wrong: ${e}`})
    }
})

// DELETE tweet
router.put('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.tweet.delete({
            where: { id: Number(id) },
        })

        res.sendStatus(200)
    } catch (e) {
        res.status(400).json({error: `Something went wrong: ${e}`})
    }
})

export default router;