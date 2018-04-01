import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PessoaFormComponent} from "./components/pessoa-form/pessoa-form.component";
import {PessoaListComponent} from "./components/pessoa-list/pessoa-list.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'pessoa/:id', component: PessoaFormComponent},
      {path: 'pessoa', component: PessoaFormComponent},
      {path: 'pessoas', component: PessoaListComponent},
      {path: '', redirectTo: '/pessoas', pathMatch: 'full'},
      {path: '*', redirectTo: '/pessoas', pathMatch: 'full'}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}


