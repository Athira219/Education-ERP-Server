// import json server library in index.js
const jsonServer = require('json-server')
//create server using json-server library

const stdServer = jsonServer.create()
//create a path to db.json

const router = jsonServer.router('DB.json')
//middleware to convert js to json
const middleware = jsonServer.defaults()
//connect
stdServer.use(middleware)

stdServer.use(router)
 //setup port for server 
const port = 3000 || process.env.port

stdServer.listen(port,()=>{
    console.log(`E-school is listening to ${port} & waiting for the request`);
})