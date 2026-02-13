import express from 'express'
import users from '../models/users.js'
import {db} from '../database/db.js'
import { where } from 'sequelize'

export const userRoute = express.Router()

userRoute.get('/',async (req,res)=>{
    const findUsers = await db.userModel.findAll()
        if(!findUsers){
            res.status(400).json({msg:"users not found!!!"})
        }
        res.send(findUsers)
})

userRoute.get('/:id', async(req,res)=>{
    const findID = await db.userModel.findByPk(req.params.id)
        if(!findID){
            res.status(400).json({msg:"that user not found!!!"})
        }
        res.send(findID)
})


userRoute.post('/',async(req,res)=>{
    const userPosts = await db.userModel.create(req.body)
        if(!userPosts){
        return res.status(400).json({msg:"post cant create!!!"})
    }
    res.status(201).json({msg:"post creted!!!", userPosts})
})


userRoute.patch('/:id',async(req,res)=>{
    const {id} = req.params
    const findUserId = await db.userModel.findByPk(+id)
        if(!findUserId){
        return res.status(400).json({msg:"user not found!!!"})
    }
    const updateUser = await db.userModel.update(req.body, {
        where:{
            id: +id
        }})
    const editedUser = await db.userModel.findByPk(+id)
    res.send(editedUser)
})

userRoute.delete('/:id',async(req,res)=>{
    const {id} = req.params
    const findUser = await db.userModel.findByPk(+id)
    if(!findUser){
        return res.status(400).json({msg:"user not found!!!"})
    }
    
    const delUser = db.userModel.destroy({where: {
        id: +id
    }})
    res.status(200).json({msg:"user succesfully deleted!!!", findUser})
})
