import { DataTypes, Model } from "sequelize"
import mission from "./missions.js"

export default function (sequelize) { 
    class agent extends Model {
        static associate(db) {
            db.agentModel.hasMany(db.missionModel, {
                foreignKey: {
                    name: "agent_id"
                }
            })
        }
    }

    agent.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        real_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        modelName: "Agent",
        sequelize,
        timestamps: true,
        updatedAt: false
    })

    return agent
}


