import {NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import {SobvHeaderComponent} from "./components/sobv-header/sobv-header.component";
import {SobvPageNotFoundComponent} from "./components/sobv-page-not-found/sobv-page-not-found.component";
import {SobvDashboardComponent} from "./components/sobv-dashboard/sobv-dashboard.component";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import {SobvSubHeaderComponent} from './components/sobv-sub-header/sobv-sub-header.component';
import {RouterModule} from "@angular/router";
import {SobvHeaderBaseComponent} from './components/sobv-header-base/sobv-header-base.component';
import {SobvTimeLineComponent} from './components/sobv-time-line/sobv-time-line.component';
import {SobvRateBarComponent} from "./components/sobv-rate-bar/sobv-rate-bar.component";
import {NgxPopperModule} from "ngx-popper";
import { SobvLimitStringPipe } from './pipes/sobv-limit-string.pipe';
import {ModalWindowsModule} from "../modal-windows/modal-windows.module";

@NgModule({
  declarations: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvSubHeaderComponent,
    SobvHeaderBaseComponent,
    SobvTimeLineComponent,
    SobvRateBarComponent,
    SobvLimitStringPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbTooltipModule,
    NgxPopperModule,
    ModalWindowsModule
  ],
  exports: [
    SobvHeaderComponent,
    SobvPageNotFoundComponent,
    SobvDashboardComponent,
    SobvSubHeaderComponent,
    SobvHeaderBaseComponent,
    SobvTimeLineComponent,
    SobvRateBarComponent,
  ],
  providers: [],
})
export class CoreModule {
}
