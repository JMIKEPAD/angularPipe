import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizeFirstPipe } from './pipes/capitalize-first.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ButtonsComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
