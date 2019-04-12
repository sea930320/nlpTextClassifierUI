import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../_auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService, private router: Router) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.headers.has(InterceptorSkipHeader)) {
            const headers = request.headers.delete(InterceptorSkipHeader);
            return next.handle(request.clone({ headers }));
        }

        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        if (this.authService.getToken()) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.authService.getToken()}`
                }
            });
        }
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse && this.router.url.indexOf('login') < 0) {
                if (err.status === 401) {
                    this.authService.logout(this.router.url)
                }
            }
        });
    }
}