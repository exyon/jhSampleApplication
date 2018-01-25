import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhSampleApplicationHomeModule } from './home/home.module';
import { JhSampleApplicationAdminModule } from './admin/admin.module';
import { JhSampleApplicationAccountModule } from './account/account.module';
import { JhSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhSampleApplicationSharedModule,
        JhSampleApplicationHomeModule,
        JhSampleApplicationAdminModule,
        JhSampleApplicationAccountModule,
        JhSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhSampleApplicationAppModule {}
