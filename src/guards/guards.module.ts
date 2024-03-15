import { Module } from '@nestjs/common';
import { AuthServiceService } from './auth-service/auth-service.service';
import { AuthGuardGuard } from './auth_guard/auth_guard.guard';

@Module({
    imports: [],
    controllers: [],
    providers: [AuthServiceService, AuthGuardGuard],
    exports: [AuthGuardGuard, AuthServiceService]
})
export class GuardsModule {}
