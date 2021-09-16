import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ErrorInterceptor} from 'src/app/_interceptors/error-interceptor.service';

export const HttpErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true
}
