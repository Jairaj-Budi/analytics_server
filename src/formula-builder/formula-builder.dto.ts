import { IsString, MinLength,  } from 'class-validator'

export class FormulaValidatorDto {
    @IsString()
    @MinLength(5)
    formulae: string;

    @IsString()
    name: string;
}