import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainFooterComponent } from './main-footer/main-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }