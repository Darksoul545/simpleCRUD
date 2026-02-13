import { DataTypes, Model } from "sequelize";

export default function(sequelize){
    class postLoader extends Model{
        
        

    }
    postLoader.init({
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false,

        },
        body:{
            type:DataTypes.TEXT,
            allwNull:false
        }
    }, {
        tableName:"posts",
        sequelize,
        timestamps:false
    })

 return postLoader
}