
export type User={
    username:string
    email:string
    phone:string
    groups:Group[]
}


export type thumbnail={
    title:string
    media:MediaType
    description:string
    createdAt:string
    editedAt:string
    imageUrl:string
}

export enum Group{
    admin="Admin",
    blogger="Blogger",
    member="Member"
}

export enum MediaType{
    video="Video",
    image="Image"
}