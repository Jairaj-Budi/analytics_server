import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulaBuilderController } from './formula-builder/formula-builder.controller';
import { FormulaBuilderService } from './formula-builder/formula-builder.service';
import { NestFeaturesController } from './nest-features/nest-features.controller';
import { NestFeaturesService } from './nest-features/nest-features.service';
import { RequestHandlerMiddleware } from './middlewares/request-handler/request-handler.middleware';
import { GuardsModule } from './guards/guards.module';
import { InterceptorsModule } from './interceptors/interceptors.module';

@Module({
  imports: [GuardsModule, InterceptorsModule],
  controllers: [AppController, FormulaBuilderController, NestFeaturesController],
  providers: [AppService, FormulaBuilderService, NestFeaturesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.log('IN middleware')
    consumer.apply(RequestHandlerMiddleware).forRoutes('*')
  }
}
