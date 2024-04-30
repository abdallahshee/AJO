import {ulid} from 'ulid'
import { ThumbnailRequest } from '../../models/thumbnail'
import {Request,Response} from 'express'

export const EditThumbnail=(req:Request, res:Response)=>{
    const id=req.params.id
    if(typeof(id)==='string'){
        // Look for the thumbnail with the id in the Db


        const body:ThumbnailRequest=req.body

    }else{
        res.status(400).send("Object not Found")
    }
    
  
}