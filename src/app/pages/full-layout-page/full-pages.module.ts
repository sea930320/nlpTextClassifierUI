import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FullPagesRoutingModule } from "./full-pages-routing.module";
import { Ng2SmartTableModule } from 'ng2-smart-table';

//-----------------service-----------------------/
import { JwtInterceptor } from '../../shared/_api/jwt.interceptor';
import { LigacaoService } from '../../shared/_api/ligacao.service';

//----------------component----------------------//
import { LigacaosClassifyComponent } from './ligacaos-classify/ligacaos-classify.component';
@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        NgbModule,
        FullPagesRoutingModule,
        Ng2SmartTableModule,
        DataTablesModule
    ],
    declarations: [
        LigacaosClassifyComponent,
    ],
    providers: [
        LigacaoService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        }
    ],
    entryComponents: []
})
export class FullPagesModule { }
