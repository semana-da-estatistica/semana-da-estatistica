import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { OndeComponent } from './onde/onde.component';
import { PalestrasComponent } from './palestras/palestras.component';
import { FormsModule } from '@angular/forms';
import { AvisoComponent } from './aviso/aviso.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CadastroComponent,
    HomeComponent,
    OndeComponent,
    PalestrasComponent,
    AvisoComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
