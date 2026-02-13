import { DataTypes, Model } from "sequelize";

export default function(sequelize){
    class userLoader extends Model{

    }

    userLoader.init({
        
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,

        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        age:{
            type:DataTypes.INTEGER,
            allowNull:false,
        }
    },
{
    tableName:"users",
    timestamps:false,
    sequelize
})

return userLoader

}