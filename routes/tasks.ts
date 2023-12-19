import express from "express";
import { PrismaClient } from '@prisma/client'
import { ObjectId } from 'bson';
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();



const router = express.Router();
const prisma = new PrismaClient()

router.post('/', jsonParser, async (req, res, next) => {
    try {
        const Tasks = await prisma.tasks.createMany({
         data:req.body,
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


    router.put('/:id', jsonParser, async (req, res, next) => {
        try {
            const Tasks = await prisma.tasks.update({
                where: {
                    id: req.params.id.toString(),
                },
                data: req.body
            })
            res.json(Tasks)
        } catch (error) {
            next(error)
        }
    })



export default router;


