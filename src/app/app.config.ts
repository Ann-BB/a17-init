import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { httpInterceptor } from './core/interceptors/http.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideHttpClient(withInterceptors([httpInterceptor])),
    HttpClientModule,
  provideAnimations(),
  provideToastr({
    timeOut: 10000,
    positionClass: 'toast-top-center',
    preventDuplicates: true,

  }),
  importProvidersFrom(NgxsModule.forRoot())]
};
