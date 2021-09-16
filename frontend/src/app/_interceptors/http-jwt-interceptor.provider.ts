import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from 'src/app/_interceptors/jwt-interceptor.service';

export const HttpJwtInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
};
