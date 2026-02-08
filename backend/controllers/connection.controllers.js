// import { connect, connection } from 'mongoose';
import Connection from '../models/connection.model.js'
import User from "../models/user.model.js"

const sendConnection = async(req , res)=>{
    try {
        const {recieverId} = req.params;
        const senderId = req.userId;
        console.log("rec",recieverId)
        if(!recieverId) return res.status(400).json({message:"Reciver required"})
        const reciever = await User.findById(recieverId)
        const sender =await User.findById(senderId)
        if(!reciever)return res.status(404).json({message:"Reciever not found"})
        if(senderId === recieverId) return res.status(500).json({message:"Can not send request to the same person"})
        if(sender.connections.includes(recieverId) ||  reciever.connections.includes(senderId))return res.status(500).json({message:"Already connected"})
        const existedConn = await Connection.findOne({$or:[{sender:senderId},{sender:recieverId}]})
        if(existedConn) return res.status(400).json({message:"Connection already exists"})
        const newConnection = await Connection.create({sender:senderId , reciever:recieverId,status:"pending"})
        if(!newConnection) return res.status(500).json("Cannot set connection due to internal err")
        res.status(201).json({success:true , message:"Connection successfully sent",connection:newConnection})

    } catch (error) {
        console.log(error)
         return res.status(500).json("Cannot set connection due to internal err" , error)

    }
}

const acceptConnection = async(req , res)=>{
    try {
        const {connectionId} = req.params;
        const connection = await Connection.findById(connectionId)
        if(!connection) return res.status(400).json({message:"No such connection exists"})
        if(connection.status != "pending")return res.status(400).json({message:"connetion already recieved"})
        connection.status("accepted")
        await connection.save()

        const sender = await User.findById(req.userId)
        sender.connections.push(connection.reciever)
        await sender.save()
        const reciever = await User.findById(connection.reciever)
        reciever.connections.push(req.userId)
        res.status(201).json({message:"Acceptd request successfully",sender,reciever,connection})
    } catch (error) {
        console.log(error)
         return res.status(500).json("Cannot accept connection due to internal err" , error)

    }
}

const rejectConnection = async(req , res)=>{
    try {
        const {connectionId} = req.params;
        const connection = await Connection.findById(connectionId)
        if(!connection) return res.status(400).json({message:"No such connection exists"})
        if(connection.status != "pending")return res.status(400).json({message:"connetion already recieved"})
        connection.status("rejected")
        await connection.save()
        res.status(201).json({message:"rejected request successfully",connection})

        
    } catch (error) {
        console.log(error)
         return res.status(500).json("Cannot reject connection due to internal err" , error)
    }
}

const removeConnection = async(req , res)=>{
    try {
        const {connectionId} = req.params;
        const connection = await Connection.findByIdAndDelete(connectionId)
        if(!connection) return res.status(400).json({message:"No such connection exists"})
        res.status(201).json({message:"delted connection successfully" , connection})

        
    } catch (error) {
         console.log(error)
         return res.status(500).json("Cannot delete connection due to internal err" , error)
    }
}

const getAllConnections = async(req , res)=>{
    try {
        const connections = await Connection.find()
        res.status(201).json({message:" connection found successfully" , connections})

    } catch (error) {
           console.log(error)
         return res.status(500).json("Cannot find connections due to internal err" , error)
    }
}
export {sendConnection , acceptConnection , rejectConnection , removeConnection , getAllConnections}