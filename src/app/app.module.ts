import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { AddComponent } from "./component/dashboard/add/add.component";
import { EditComponent } from "./component/dashboard/edit/edit.component";
import { ListComponent } from "./component/dashboard/list/list.component";
import { ConnectService } from "./connect.service";
import { UrlService } from "./url.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstagramComponent } from './component/instagram/instagram.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { ActivateGuard } from './activate.guard';
import { ActivateService } from './activate.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    InstagramComponent,
    PagenotfoundComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [ConnectService, UrlService, ActivateGuard, ActivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
