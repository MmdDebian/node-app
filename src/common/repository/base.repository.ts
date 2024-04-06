import { BaseInterface } from "../interface/base.interface";

export class BaseAbstractRepository<T> implements BaseInterface<T>{
    public datasource:T[] = []
    constructor(){}


    public create(data:T):T{
        this.datasource.push(data)
        return data ; 
    }


    public find():T[]{
        return this.datasource 
    }
}