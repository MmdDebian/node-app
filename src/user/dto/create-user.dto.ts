import { IsNotEmpty } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    name: string 
    
    @IsNotEmpty()
    family : string 

    @IsNotEmpty()
    email : string 
}
