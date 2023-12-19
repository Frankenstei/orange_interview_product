Task Manager API
----------------

This is simple API that enables a user create, update, view and delete tasks
Using simple CRUD operations this API was created making use of the following technologies
1. Typescript
2. Prisma
3. Mongodb Atlas
4. Expressjs
5. Nodejs

All dependencies should be installed using 
"npm install"

To link the prisma client to a remote or local mongodb database run:
npx prisma generate


To start the server locally:
npx ts-node server.ts

The endpoints can only be accessed locally for now a local machine on port 3000
To test endpoints for GET and POST requests, type in the following on any platform like POSTMAN or VSCODE RESTAPI-CLIENT:
http://localhost:3000

To test endpoints for PATCH and DELETE refer to the appropriate ID on the database, e.g.
http://localhost:3000/






Note that the rest.http client has been created to test the basic CRUD operation from VSCODE. Any other platform can be used for this test



Useful links:
https://www.prisma.io/docs/orm/reference/prisma-client-reference#finduniqueorthrow
https://github.com/prisma/prisma/issues/6718
https://github.com/prisma/prisma/issues/8338
https://www.prisma.io/docs/orm/overview/databases/mongodb#:~:text=Defining%20IDs%3A%20MongoDB%20documents%20have,see%20Defining%20IDs%20in%20MongoDB.

