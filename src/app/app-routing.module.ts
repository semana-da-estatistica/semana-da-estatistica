import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { OndeComponent } from './onde/onde.component';
import { PalestrasComponent } from './palestras/palestras.component';
import { AvisoComponent } from './aviso/aviso.component';

const routes: Routes = [
  {path: 'cabecalho', component: CabecalhoComponent},
  {path: 'cadastro', component:CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'onde', component: OndeComponent},
  {path: 'palestras', component: PalestrasComponent},
  {path: 'aviso', component: AvisoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
