import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { HeaderComponent } from "./header/header.component";
import { AsideFormComponent } from "./aside-form/aside-form.component";
import { CtaButtonComponent } from "./cta-button/cta-button.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutMainComponent } from "./about-main/about-main.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeaderComponent,
    AsideFormComponent,
    CtaButtonComponent,
    FooterComponent,
    AboutMainComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
