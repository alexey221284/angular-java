import { HTTP_INTERCEPTORS } from '@angular/common/http';


export const MockInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: MockInterceptor,
  multi: true,
};
