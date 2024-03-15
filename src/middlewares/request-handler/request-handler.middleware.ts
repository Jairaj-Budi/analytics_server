import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class RequestHandlerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.prefix = 'Jairaj'
    next();
  }
}
