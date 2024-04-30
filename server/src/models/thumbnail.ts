import { MediaType } from "./commonModels"
import { User } from "./user"

export type Thumbnail={
    id:string
    title:string
    media:MediaType
    description:string
    createdAt:string
    editedAt:string
    imageUrl:string
    createdBy:User
}

export type ThumbnailRequest={
    title:string
    description:string
    imageUrl:string
}
