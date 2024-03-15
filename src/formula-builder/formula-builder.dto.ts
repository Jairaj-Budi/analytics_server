import { IsString, MinLength,  } from 'class-validator'

export class FormulaValidatorDto {
    @IsString()
    formulae: string;
}