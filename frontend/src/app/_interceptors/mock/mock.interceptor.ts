import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockInterceptor implements HttpInterceptor {
  private readonly mocks = mocks;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<any> {
    const { url } = request;
    const mock = this.mocks[url];
    return mock ? this.mockResponce(mock, url) : next.handle(request);
  }

  private mockResponce(mock: ValueOf<typeof mocks>, url: keyof typeof mocks): Observable<any> {
    console.warn(`Результат запроса на адрес: ${url} подменён на: `, mock);
    return of(new HttpResponse({ status: 200, body: mock }));
  }
}
