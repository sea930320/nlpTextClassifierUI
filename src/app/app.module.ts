
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

//----------------component----------------------//
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

//-----------------service-----------------------//
import { GlobalConstants } from './shared/_constants/global.constants';
import { AuthService } from './shared/_auth/auth.service';
import { AuthGuard } from './shared/_auth/auth-guard.service';

import { CustomOption } from "./shared/toastr/custom-option";
//------------------plugins----------------------//
import * as $ from 'jquery';


@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        NgbModule.forRoot(),
        ToastModule.forRoot(),
    ],
    providers: [
        GlobalConstants,
        AuthService,
        AuthGuard,
        { provide: ToastOptions, useClass: CustomOption }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }