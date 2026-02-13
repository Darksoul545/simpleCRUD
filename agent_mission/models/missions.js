import { DataTypes, Model } from "sequelize"

export default function (sequelize) { 
    class mission extends Model {

    }

    mission.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        missionName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        agent_id:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    }, {
        modelName: "Mission",
        sequelize,
        timestamps: true,
        updatedAt: false
    })

    return mission
}

