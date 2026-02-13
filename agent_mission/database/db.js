import { Sequelize } from "sequelize"
import agentLoader from "../models/agents.js"
import missionLoader from "../models/missions.js"


const sequelize = new Sequelize(
    "CRUD",
    "root",
    "asd",
    {
        host:"localhost",
        dialect:"mysql",
        logging:false,
        port: 3306
    }
)

export const db = {sequelize};
db.missionModel = missionLoader(db.sequelize);
db.agentModel = agentLoader(db.sequelize);
console.log(db.agentModel);

db.agentModel.associate?.(db);