export interface BaseInterface<T>{
    find(filter?:T):T[]
    create(data:T): T 
}