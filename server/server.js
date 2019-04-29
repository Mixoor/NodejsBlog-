//


const server= require("./configs/app")();
const configs = require("./configs/config")
const db =require("./configs/db");


server.create(configs,db);

server.start();

