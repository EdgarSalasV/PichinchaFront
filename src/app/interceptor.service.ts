import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

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
    if (!this.isVerificationProduct(request)) {
      console.log('request', request);
      const modifiedReq = request.clone({
        headers: request.headers.set('authorId', '1'),
      });
      return next.handle(modifiedReq);
    } else {
      return next.handle(request);
    }
  }

  isVerificationProduct(request: HttpRequest<any>) {
    const { url, method } = request;
    return url.includes('verification') && method === 'GET';
  }
}
