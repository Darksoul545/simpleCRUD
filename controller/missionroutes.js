import express from 'express'
import  mission  from '../models/missions.js'
import {db} from '../database/db.js'

export const missionsRouter = express.Router()

missionsRouter.get("/",async(req,res)=>{
    const missions = await db.missionModel.findAll()
    if(!missions){
        res.status(400).json({msg:"mission nod find !!!"})
    }
    res.send(missions)
})

missionsRouter.get("/:id",async (req,res)=>{
    const missid = await db.missionModel.findByPk(req.params.id)
    if(!missid){
        res.status(400).json({msg:"mission cant found !!!"})
    }
    res.send(missid)
})

missionsRouter.post("/:id",async(req,res)=>{
    const foundAgent= await db.agentModel.findByPk(req.params.id)
    if(!foundAgent){
        res.status(400).json({msg:"that agent not found !!!"})
    }

    const mission = await db.missionModel.create({
        ...req.body,
        agent_id: foundAgent.id
    })

    res.status(201).json(mission)
})