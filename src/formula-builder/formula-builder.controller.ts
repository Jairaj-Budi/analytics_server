import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { FormulaBuilderService } from './formula-builder.service';
import { FormulaValidatorDto } from './formula-builder.dto';

@Controller('fb')
export class FormulaBuilderController {
    constructor(private formula_builder: FormulaBuilderService) {}
    @Get('health_check')
    welcomeGet() {
        return 'HI, Welcome to the nest application'
    }

    @Get('visitors')
    visitorsGet() {
        return `The persons visited are ${this.formula_builder.getVisitors()}`
    }

    @Get(':name')
    paramGet(@Param() params) {
        this.formula_builder.addVisitors(params.name)
        return `Hi, Mr. ${params.name}`
    }
    
    @Post('validate_formulae')
    validateFormula(@Body() formula_builder_body: FormulaValidatorDto) {
        try {
            const validateFormulae = this.formula_builder.validateFormula(formula_builder_body)
    
            console.log(validateFormulae, 'validateFormulae')
            if (validateFormulae) {
                return {message: `Your formulae passed the validation check`, success: true}
            }
            return {message: `Your formulae didn't passed the validation check`, success: false}
        } catch (err) {
            console.log(err)
            return err
        }
    }
}
