import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
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
    });
    console.log(Tasks)

    const allTasks = await prisma.tasks.findMany({
    })
    console.log(allTasks)
  }

  main()