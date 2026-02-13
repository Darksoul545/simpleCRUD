import express from 'express'
import agent from '../models/agents.js'
import {db} from '../database/db.js'

export const agents = express.Router()

agents.get("/",async(req,res)=>{
    const findAgents = await db.agentModel.findAll()
    if(!findAgents){
        res.status(400).json({msg:"agents not found !!!"})
    } 
    res.send(findAgents)

})

agents.get("/:id",async(req,res)=>{
    const findAgent = await db.agentModel.findByPk(req.params.id)
    if(!findAgent){
        res.status(400).json({msg:"Agent not aviable !!!"})
    }
    res.send(findAgent)
})


agents.post("/", async (req, res) => {
  try {
    const agentPost = await db.agentModel.create(req.body);

    res.status(201).json(agentPost);

  } catch (err) {
    console.error(err);  

    res.status(500).json({
      message: "Agent create failed",
      error: err.message
    });
  }
});


agents.patch("/:id",async(req,res)=>{
    const agentUpd = await db.agentModel.findByPk(req.params.id)
    if(!agentUpd){
        res.status(400).json({msg:"agent not found !!!"})
    }
    Object.assign(agentUpd,req.body)
    res.send(agentUpd)

})

agents.put("/:id",async(req,res)=>{
    const agent = await db.agentModel.findByPk(req.params.id)
    if(!agent){
        res.status(400).json({msg:"agent cant updatet !!!"})
    }
    const uptagent = db.agentModel.update(req.body)
    res.send(uptagent)
})

agents.delete("/:id",async(req,res)=>{
    const destroyAgent = await db.agentModel.findByPk(req.params.id)
    if(!destroyAgent){
        res.status(400).json({msg:"agent not found !!!"})
    }
    const delagent = db.agentModel.destroy(req.body)
    if(!delagent){
        res.status(500).json({msg:"agent cand deleted !!!"})
    }
    res.status(200).json({msg:"agent successfully deleted !!!"})
    
})