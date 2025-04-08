import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateContactUsDto {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    subject: string;

    @IsOptional()
    message: string;
}
