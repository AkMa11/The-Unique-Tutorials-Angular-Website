import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeMainComponent } from "./home-main/home-main.component";
import { ContactMainComponent } from "./contact-main/contact-main.component";
import { CtaButtonComponent } from "./cta-button/cta-button.component";
import { CtaContactComponent } from "./cta-contact/cta-contact.component";
import { LoginMainComponent } from "./login-main/login-main.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "home",
    component: HomeMainComponent
  },
  {
    path: "contact",
    component: ContactMainComponent
  },
  {
    path: "login",
    component: LoginMainComponent
  },
  {
    path: "",
    component: CtaButtonComponent,
    outlet: "ctahome"
  },
  {
    path: "",
    component: CtaContactComponent,
    outlet: "ctacontact"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  HomeMainComponent,
  ContactMainComponent,
  LoginMainComponent,
  CtaButtonComponent,
  CtaContactComponent
];
