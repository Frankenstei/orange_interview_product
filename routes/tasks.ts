import express from "express";
import { PrismaClient } from '@prisma/client'
import { ObjectId } from 'bson';
const id = new ObjectId();



const router = express.Router();
const prisma = new PrismaClient()

router.post('/', async (req, res, next) => {
    try {
        const Tasks = await prisma.tasks.createMany({
            data: [
                {
                    "title": "quis ut nam facilis et officia qui",
                    "description":"quis ut nam facilis et officia qui",
                    "status": "pending"
                  },
                  {
                    "title": "fugiat veniam minus",
                    "description": "quis ut nam facilis et officia qui",
                    "status": "Pending"
                  },
                  {
                    "title": "et porro tempora",
                    "description": "quis ut nam facilis et officia qui",
                    "status": "Completed"
                  },
                  {
                    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                    "description": "quis ut nam facilis et officia qui",
                    "status": "Pending"
                  },
                  {
                    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
                    "description": "quis ut nam facilis et officia qui",
                    "status": "pending"
                  }
              ],
        })
        res.json(Tasks)
        console.log(Tasks);
   }
    catch (error) {
       next(error)
   }
})



router.get('/', async (req, res, next) => {
    try {
        const Tasks = await prisma.tasks.findMany({
        })
        res.json(Tasks)
        console.log(Tasks);
   }
    catch (error) {
       next(error)
   }
})

router.get('/:id', async (req, res, next) => {
    try {
       const Tasks = await prisma.tasks.findUnique({
         where: {
            id: req.params.id.toString()
           },
          })
        res.json(Tasks)
   }
    catch (error) {
       next(error)
   }
   })


   router.delete('/:id', async (req, res, next) => {
    try{
      const Tasks = await prisma.tasks.delete({
         where: {
           id: req.params.id.toString(),
            },
      })
      res.json(Tasks)
    } catch (error) {
     next(error)
    }
    })


    router.patch('/:id', async (req, res, next) => {
        try {
            const Tasks = await prisma.tasks.update({
                where: {
                    id: req.params.id.toString(),
                },
                data: req.body,
            })
            res.json(Tasks)
        } catch (error) {
            next(error)
        }
    })



export default router;


