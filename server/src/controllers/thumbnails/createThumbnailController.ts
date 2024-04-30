import { ulid } from "ulid"
import { MediaType, Group } from "../../models/commonModels"
import { ThumbnailRequest, Thumbnail } from "../../models/thumbnail"
import { User } from "../../models/user"
import {Request,Response} from 'express'

export const CreateThumbnail=(req:Request, res:Response)=>{
    const itemmedia=MediaType.image
    const groups:Group[]=[]
    const user:User={
        username:"Abdallah",
        email:"dev@gmail.com",
        phone:"079651326",
        groups:groups
    }
    const body=req.body
    const thumbnail:Thumbnail={
        id:ulid(),
        createdAt:new Date().toISOString(),
        editedAt:new Date().toISOString(),
        createdBy:user,
        media:itemmedia,
        ...body
    }
    // Implement inserting thumbnail into Db
    res.send('')
}