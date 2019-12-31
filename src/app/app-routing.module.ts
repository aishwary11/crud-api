import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddComponent } from "./component/dashboard/add/add.component";
import { EditComponent } from "./component/dashboard/edit/edit.component";
import { ListComponent } from "./component/dashboard/list/list.component";
import { InstagramComponent } from './component/instagram/instagram.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "add",
        component: AddComponent
      },
      {
        path: "edit",
        component: EditComponent
      },
      {
        path: "list",
        component: ListComponent
      },
      {
        path: "instagram",
        component: InstagramComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
