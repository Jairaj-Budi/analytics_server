import { Module } from '@nestjs/common';
import { LoggerInterceptor } from './logger/logger.interceptor';
import { LoggerService } from './logger/logger.service';

@Module({
    imports: [],
    controllers: [],
    providers: [LoggerInterceptor, LoggerService],
    exports: [LoggerInterceptor, LoggerService]
})
export class InterceptorsModule {}
