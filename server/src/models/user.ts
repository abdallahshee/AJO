import { Group } from "./commonModels"

export type User={
    username:string
    email:string
    phone:string
    groups:Group[]
}