import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth-service/auth-service.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor (private authService: AuthServiceService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest()
    return this.authService.validateEndPoint(request);
  }
}
