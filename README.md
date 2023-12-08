download an app to generate flowchart from pseudocode and vice versa




install prisma and rest client extension on vscode


npm i -g express-draft - install package for express skeleton
exp . - this builds the express skeleton for you
npm run dev - to run in development mode
npm i -D prisma - install as a dependency (CLI)
npm i @prisma/client - to communicate with database and make queries
npx prisma init - to initialize prisma, instead of creating the related files manually


In the .env, we change the DATABASE_URL link to that of mongodb
and in prisma/schema.prisma we change provider to mongodb and also input the following code

model Product {
 id Int @id @default(autoincrement())
 name String @unique
 price Int @default(999)
 createdAt DataTime @default(now())
}


model Category {
 id Int @id @default(autoincrement())
 name String @unique
 products Product[]
}

Click save and the Product will create a connection to the Category model


In api.route.js

edit the following
router.get('/products',
router.get('/products/:id',
router.post('/products',
router.delete('/products/:id',
router.patch('/products/:id'


npx prisma studio - to see the things we have created in GUI

npx prisma migrate dev - to link the prisma to our database



in the api.route.js we edit the following
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

router.get('/products', async (req, res, next) => {
 try {
     const products = await prisma.product.findMany({
          //optional include:  { category: true },
     })
      const categories = await prisma.category.findMany({ //optinal include: {products: true},
})
//to respond with two objects we use res.json({products, categories})
     res.json(products)
}
 catch (error) {
    next(error)
}
})



router.get('/products/:id', async (req, res, next) => {
 try {
    const {id} = req.params
    const product = await prisma.product.findUnique({
      where: {
         id: Number(id),
        },
       })
     res.json(products)
}
 catch (error) {
    next(error)
}
})

router.post('/products', async (req, res, next) => [
try {
  const product = await prisma.product.create({
    data: req.body,
   })
   res.json(product)
} catch (error) {
    next(error)
}
})

router.delete('/products/:id', async (req, res, next) => {
try{
  const {id} = req.params
  const deletedProduct = await prisma.product.delete({
     where: {
       id: Number(id),
        },
  })
  res.json(deletedProduct)
} catch (error) {
 next(error)
}
})

router.patch('/products/:id', async (req, res, next) => {
try {
  const {id} = req.params
  const product = await prisma.product.update({
    where: {
      id: Number(id),
     },
    data: req.body,
    },
})
res.json(product)
} catch (error) {
 next(error)
}
})



to test crud request and response, using the rest client 
create a file called rest.http
type the route to test

http://localhost:3000/api/products and click Send request



###
Send Request
http://localhost:3000/api/products/2

###
Send Request
PATCH http://localhost:3000/api/products/3
Content-Type: application/json

{
  "name": "iPad Pro Max",
  "price": 1299,
   "categoryId": 2
}

To create a content for the table, we simply use the prisma studio easily


When we add a new field to our model, we have to run npx prisma generate to generate the model, and we also have to migrate again using npx prisma migrate dev





Integrate with mongodb

in schema.prisma edit

datasource db {
  provider = "mongodb"
  url = env("DATABASE_URL")
}

generator client {
 provider = "prisma-client-js"
 previewFeatures = ["mongodb"]
}

model Post {
id String @id @default(auto()) @map("_id") @db.ObjectId
title String
description String
}


npx prisma generate instead of npx prisma migrate dev



async function main() {
const post = await prisma.post.create({
data: {
  title: 'My first post',
  body: 'My first post'
});
console.log(post)
}

const data = mockData.map(mock = > ({mock})


npm install mongodb

mongodb+srv://admin:Lovedayatlas1@cluster0.geprjih.mongodb.net/?retryWrites=true&w=majority


npm install typescript ts-node @types/node
npx tsc --init
tsc index.ts - to compile typesccript



PATCH a user
const user = await prisma.user.create({
  data: {
    email: 'elsa@prisma.io',
    name: 'Elsa Prisma',
  },
})


GET by ID
const user = await prisma.user.findUnique({
  where: {
    email: 'elsa@prisma.io',
  },
})

// By ID
const user = await prisma.user.findUnique({
  where: {
    id: 99,
  },
})


GET all
const users = await prisma.user.findMany()


PATCH
const updateUser = await prisma.user.update({
  where: {
    email: 'viola@prisma.io',
  },
  data: {
    name: 'Viola the Magnificent',
  },
})


npx ts-node server.ts

