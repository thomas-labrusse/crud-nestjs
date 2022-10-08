import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
// By referencing the name 'local' in AuthGuard, we associate it with the code supplied by the passport-local package.
export class LocalAuthGuard extends AuthGuard('local') {}
