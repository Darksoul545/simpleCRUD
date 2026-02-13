import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import userLoader from '../models/users.js'
import postLoader from '../models/posts.js'
dotenv.config()



const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_ROOT,
    process.env.PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"mysql",
        logging: false
    }
) 

export const db = {}
db.sequelize = sequelize
db.userModel = userLoader(sequelize)
db.postModel = postLoader(sequelize)

db.userModel.hasMany(db.postModel, {
    foreignKey: "user_id",
    as: "posts"
})

db.postModel.belongsTo(db.userModel,{
    foreignKey: "user_id",
    as: "author"
})