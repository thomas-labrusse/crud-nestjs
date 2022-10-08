import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    //  isAuthenticated() : comes from passport automatically, when sessions are setted up, allowing the request to come down the handler if returns true
    return request.isAuthenticated();
  }
}
