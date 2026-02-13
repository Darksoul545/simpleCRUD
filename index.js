import {db} from './database/db.js'
import express from 'express'
import {agents} from './controller/agentroutes.js'
import { missionsRouter } from './controller/missionroutes.js'



const app = express()
const port = 3000
db.sequelize.sync({alter:true}).then(() => console.log("DB synced"))
app.use(express.json())
app.use(express.urlencoded())
app.use("/agents",agents)
app.use("/missions", missionsRouter)



app.listen(3000,(req,res)=>{
    console.log("Connection complete !!!")
})