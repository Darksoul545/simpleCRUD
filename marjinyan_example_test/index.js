import express from 'express'
import {db} from './database/db.js'
import {userRoute} from './routers/userRoute.js'
import { postRoute } from './routers/postroute.js'

const port = 3000
const app = express()
db.sequelize.sync({alter:true}).then(console.log("DB SYNCED"))

app.use(express.json())
app.use(express.urlencoded())
app.use("/users/",userRoute)
app.use("/posts/",postRoute)





app.listen(port,()=>
    console.log("server starts on port",port)
)
