import express from 'express'
import posts from '../models/posts.js'
import {db} from '../database/db.js'

export const postRoute = express.Router()

postRoute.get('/',async(req,res)=>{
    const findPosts = await db.postModel.findAll()
        if(!findPosts){
            return res.status(400).json({msg:"posts not found!!!"})
        }
        res.send(findPosts)
})

postRoute.get('/:id',async(req,res)=>{
    const findId = await db.postModel.findByPk(req.params.id, {include: {model: db.userModel, as: "author"}})
        if(!findId){
            return res.status(400).json({msg:"that post id not found"})
        }
        res.send(findId)
})

postRoute.post('/',async(req,res)=>{
    const userID = req.body.user_id
    const userFound = await db.userModel.findByPk(userID)
    if(!userFound){
        return res.status(400).json({msg:"user not found!!!"})
    }
    const postId = await db.postModel.create(req.body)
        if(!postId){
            res.status(400).json({msg:"post cant create!!!"})
        }
        res.send(postId)
})