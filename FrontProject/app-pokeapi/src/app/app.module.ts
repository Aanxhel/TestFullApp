import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { HeaderComponent } from './modules/components/header/header.component';
import { PokeDetailComponent } from './modules/components/poke-detail/poke-detail.component';
import { PokeTableComponent } from './modules/components/poke-table/poke-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PokeDetailComponent,
    PokeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }