import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {HttpModule} from "@angular/http";

import {PessoaListComponent} from 'app/components/pessoa-list/pessoa-list.component';
import {PessoaFormComponent} from "./components/pessoa-form/pessoa-form.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    PessoaListComponent,
    PessoaFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
