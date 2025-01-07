import { IsString, IsInt, IsOptional, Length, IsNotEmpty } from 'class-validator';

//En Dto för att kontrollera/validerar inmatningar med post och i en partial class för put
//Denna är viktig för att data som lagras är av correkt typ eller längd enligt specifikationen nedan
//Denna klass använde Class-validator och vilkoren används även för att hjälpa min felhantering.

export class CreateDiscDto {

    @IsString()
    @Length(2, 50)
    @IsNotEmpty()
    brand: string;

    @IsString()
    @Length(2, 50)
    @IsNotEmpty()
    model: string;

    @IsString()
    @Length(1, 100)
    @IsNotEmpty()
    version: string;

    @IsString()
    @IsNotEmpty()
    plastic: string;

    @IsString()
    @Length(1, 50)
    @IsNotEmpty()
    type: string;

    @IsInt()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @Length(5, 10)
    @IsNotEmpty()
    fly_stats: string;

    @IsString()
    @Length(5, 1000)
    about: string;

    @IsInt()
    @IsNotEmpty()
    price: number;
}
