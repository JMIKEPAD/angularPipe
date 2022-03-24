import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HttpClientModule } from "@angular/common/http";
import { BlackBackgroundDirective } from './directives/black-background.directive';
import { BackgroundDirective } from './directives/background.directive';
import { ListModule } from './components/list/module/list.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BlackBackgroundDirective,
    BackgroundDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
