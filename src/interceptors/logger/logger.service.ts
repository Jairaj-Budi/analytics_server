import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    logValues(value) {
        console.log('Value recieved in the interceptor', value)
    }
}
