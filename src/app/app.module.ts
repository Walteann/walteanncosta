import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WalteannNavComponent } from './components/walteann-nav/walteann-nav.component';
import { WalteannSobremimComponent } from './components/walteann-sobremim/walteann-sobremim.component';
import { WalteannQualidadesComponent } from './components/walteann-qualidades/walteann-qualidades.component';
import { WalteannPortfolioComponent } from './components/walteann-portfolio/walteann-portfolio.component';
import { WalteannExperienciaComponent } from './components/walteann-experiencia/walteann-experiencia.component';
import { WalteannHabilidadesComponent } from './components/walteann-habilidades/walteann-habilidades.component';
import { WalteannContatosComponent } from './components/walteann-contatos/walteann-contatos.component';
import { WalteannFooterComponent } from './components/walteann-footer/walteann-footer.component';
import { WalteannHeaderComponent } from './components/walteann-header/walteann-header.component';

@NgModule({
  declarations: [
    AppComponent,
    WalteannNavComponent,
    WalteannSobremimComponent,
    WalteannQualidadesComponent,
    WalteannPortfolioComponent,
    WalteannExperienciaComponent,
    WalteannHabilidadesComponent,
    WalteannContatosComponent,
    WalteannFooterComponent,
    WalteannHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
