import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulaBuilderController } from './formula-builder/formula-builder.controller';
import { FormulaBuilderService } from './formula-builder/formula-builder.service';

@Module({
  imports: [],
  controllers: [AppController, FormulaBuilderController],
  providers: [AppService, FormulaBuilderService],
})
export class AppModule {}
