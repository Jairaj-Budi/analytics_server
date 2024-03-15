import { Injectable } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class FormulaBuilderService {
    private visitors = []
    private formulae = ''
    addVisitors(visitorName: string) {
        this.visitors.push(visitorName)
    }

    getVisitors() {
        return this.visitors.join(', ')
    }

    addFormula(formula_builder_body) {
        console.log(formula_builder_body)
        this.formulae = formula_builder_body.formulae
        console.log(this.formulae)
        return true
    }

    validateFormula (formula_builder_body) {
        console.log(formula_builder_body)
        const { formulae } = formula_builder_body
        return formulae === 'formulae'
    }
}
