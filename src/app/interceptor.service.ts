import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';

/**
 * Inlcudes all app global htttp-client intteceptions.
 */

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.isVerificationProduct(request)) return next.handle(request);

    request.headers.set('authorId', '1')
    let temRequest: HttpRequest<any> = request.clone({
      headers: request.headers.set('authorId', '1'),
    });

    if (this.isDeleteProduct(request)) {
      temRequest = temRequest.clone({ responseType: 'text' as 'json' });
    }

    return next
      .handle(temRequest)
      .pipe(map((event: HttpEvent<any>) => this.parseJsonResponse(event)));
  }

  isVerificationProduct(request: HttpRequest<any>) {
    const { url, method } = request;
    return url.includes('verification') && method === 'GET';
  }

  isDeleteProduct(request: HttpRequest<any>) {
    return request.method === 'DELETE';
  }

  private parseJsonResponse(event: HttpEvent<any>) {
    if (event instanceof HttpResponse && typeof event.body === 'string') {
      const body =
        event instanceof HttpResponse ? { message: event.body } : event;
      return event.clone({ body });
    } else {
      return event;
    }
  }
}
